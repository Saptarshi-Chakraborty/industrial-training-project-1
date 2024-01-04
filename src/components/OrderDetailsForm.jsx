
const OrderDetailsForm = ({ orderDetails, setOrderDetails }) => {
    console.log(orderDetails);

    function changeNumberOfItem(changeBy) {
        // minimum number of item is 1
        if (orderDetails.noOfItem <= 1 && changeBy < 1) return

        // maximum number of item is 10
        if (orderDetails.noOfItem >= 10 && changeBy === 1) return


        setOrderDetails((oldValue) => {
            return {
                ...oldValue,
                noOfItem: oldValue.noOfItem + changeBy
            }
        })
    }


    return (
        <div className="m-auto my-auto border border-1 border-black rounded px-2" style={{maxWidth:"400px"}}>
            <h2>Order Details</h2>
            <hr />
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Product Name</label>
                <input value={orderDetails.name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readOnly />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Category</label>
                <input value={orderDetails.type} type="text" className="form-control" id="exampleInputPassword1" readOnly />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Quantity</label>
                <div className='d-flex gap-2'>
                    <button onClick={() => changeNumberOfItem(-1)} className="btn btn-danger">-</button>
                    <span className="fw-bold fs-5">{orderDetails.noOfItem}</span>
                    <button onClick={() => changeNumberOfItem(1)} className="btn btn-primary">+</button>
                </div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Total</label>
                <input value={orderDetails.price * orderDetails.noOfItem} type="text" className="form-control" id="exampleInputPassword1" readOnly />
            </div>
        </div>
    )
}

export default OrderDetailsForm