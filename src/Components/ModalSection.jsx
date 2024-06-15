import React from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";

const ModalSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    fullname: "",
    address: "",
    mobileNumber: "",
    pinCode: ""
  });

  const {fullname, address, mobileNumber,pinCode}= orderDetails;

  const handleChange = (e) => {
    const {name,value}=e.target;
    setOrderDetails({...orderDetails,[name]:value});
  }

  const handleOrder = (e) => {

    e.preventDefault();
    if(!fullname || !address || !mobileNumber || !pinCode){
      toast.error("Please fill all the fields")
    }else{
      toast.success("Order Successfully Placed");
      onCloseModal();
    }

  }

  function onCloseModal() {
    setOpenModal(false);
    setOrderDetails("");
  }

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-1 text-sm text-white uppercase w-full"
      >
        Checkout
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your Full Name" />
              </div>
              <TextInput
              autoComplete="false"
                name="fullname"
                value={fullname}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Enter Full Address" />
              </div>
              <TextInput 
                name="address"
                autoComplete="false"
                value={address}
                onChange={handleChange} 
                required 
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Enter Your Pincode" />
              </div>
              <TextInput
              autoComplete="false"
                name="pinCode"
                value={pinCode}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your Mobile Number" />
              </div>
              <TextInput
              autoComplete="false"
                name="mobileNumber"
                value={mobileNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full">
              <Button className="w-full" onClick={handleOrder}>Order Now</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalSection;
