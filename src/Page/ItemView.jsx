import React, { useCallback, useState , useEffect} from 'react'
import { TextArea } from '../UI_component';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/Input';
import Data from './GcodeFiles/cup.gcode';
const ItemView = () => {
    getCsvData(Data);	
    return(
        <>
            <div>
                <Button variant="contained" onClick={PrinterSetting}>購入</Button>                
            </div>
        </>
    );
}

export default ItemView;



function getCsvData( dataPath )
{
	var req = new XMLHttpRequest();
    req.open("get", dataPath, true);	// アクセスするファイルを指定
	req.send(null);			// HTTP リクエストの発行（引数は省略できる模様）
    req.onload = function(){
		console.log(req.responseText);	
        SaveasGcode(req.responseText);	
	}
}



let Gcodes = new Array();
let Gcode_readed_num;
let port;
async function PrinterSetting() {
    console.log("from onstart")
      try {
          port = await navigator.serial.requestPort();
          await port.open({ baudRate: 115200 });
          console.log("接続");
         onConnectButtonClick()
         SendGcode_fromFile()
      } catch (e) {
          console.log("Error");
      }
  }

  

let SerialBuffer;
async function onConnectButtonClick() {
  try {
      while (port.readable) {
          const reader = port.readable.getReader();

          try {
              while (true) {
                  let inputValue="";
                  while(true){
                    const { value, done } = await reader.read();
                    let DecodedValue = new TextDecoder().decode(value)
                    if (done) {
                        addSerial("Canceled\n");
                        break;
                    }
                    inputValue = inputValue + DecodedValue
                    if(inputValue.includes("\n")){
                      break;
                    }
                  }
                  
                  addSerial(inputValue)
                  if(inputValue.includes("\n")){
                    if(inputValue.includes("ok") || inputValue =="wait\n"){
                      console.log("sendNextGcode")
                      SendGcode_fromFile()
                    }                    
                  }


              }
          } catch (error) {
              console.log("Error: Read" + error + "\n");
          } finally {
              reader.releaseLock();
          }
      }
  } catch (error) {
      console.log("Error: Open" + error + "\n");
  }
}

function addSerial(text){
  console.log(text)
}


function remove_setting(){
  Gcodes.forEach(function(element, index){
    if(element[0] ==";"){
      delete Gcodes[index]
    }
  });
  Gcodes = Gcodes.filter(Boolean)
}

function SendGcode_fromFile(){
    let Gcode = Gcodes.shift();
    console.log(Gcode)
  
    writeText(Gcode)

  }


  async function writeText(text) {
      const encoder = new TextEncoder();
      const writer = port.writable.getWriter();
      await writer.write(encoder.encode(text+"\n"));
      console.log("テキスト書き込み: " + text);
      writer.releaseLock();
  }
  

  function SaveasGcode(file_text){
    let fileContentArray = file_text.split(/\r\n|\n/);
    Gcodes = Gcodes.concat(fileContentArray)
    remove_setting()
    console.log(Gcodes)
  }
  
