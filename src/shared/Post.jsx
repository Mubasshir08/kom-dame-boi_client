import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPopup } from '../redux/PostSlice';
import { GrAttachment } from 'react-icons/gr';

const Post = () => {
  const [IsPopUpShow, setIsPopUpShow] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);
  
  const dispatch = useDispatch();
  const { popup } = useSelector((state) => state.post);

  useEffect(() => {
    setIsPopUpShow(popup);
    // console.log(selectedFiles);
  }, [popup,selectedFiles]);

  const popupHandler = (e) => {
    e.preventDefault();
    dispatch(setPopup(!popup));
  };

  const handleAttachmentClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    console.log('Selected files:', files);
  };

  return (
    <div className={`${IsPopUpShow ? "block" : "hidden"} w-2/3 md:w-1/2 pt-4 md:pt-2 absolute bg-base-100 border border-neutral z-10 rounded-md translate-x-20 md:translate-x-77`}>
      <form action="" className="md:px-3 relative">
        <h3 className="text-center text-lg">Post</h3>
        <button className="btn btn-neutral btn-circle absolute -top-2 md:top-1 right-3" onClick={popupHandler}>x</button>
        
        <select className="focus:outline-none border-primary rounded-md ml-5.5 md:ml-10 mt-5 p-1">
          <option defaultChecked={true}>Sell</option>
          <option>Regular</option>
        </select>

        <div className="relative border border-dotted w-7/8 ml-5.5 md:ml-10 my-3 md:p-1 h-40 md:h-50">
          <textarea name="" id="" className="resize-none border-none focus:outline-none w-full h-30 p-1 md:h-37 overflow-scroll" placeholder="Description ..."></textarea>
          <GrAttachment className="absolute bottom-2 left-2 md:left-3 text-lg cursor-pointer" onClick={handleAttachmentClick} />
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            multiple 
            accept="image/*"
            onChange={handleFileChange} 
          />
        </div>

        <button className="btn btn-neutral w-7/8 ml-5.5 md:ml-10 mb-5">Post</button>
      </form>
    </div>
  );
};

export default Post;
