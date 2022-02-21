import React, { useCallback, useState }from 'react'

const AddProducts = () => {
    const [name, setName] = useState(""),
        [price, setPrice] = useState("");

    const Name = useCallback((event) => {
        setName(event.target.value)
    }, [setName])

    const Price = useCallback((event) => {
        setPrice(event.target.value)
    }, [setPrice])

    return(
        <>
            <h2 className="">商品の登録</h2>
            <div className="">
                <textarea name="" ></textarea>
            </div>
        </>
    )
}

export default AddProducts;