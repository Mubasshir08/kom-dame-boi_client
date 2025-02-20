import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPopup } from '../redux/PostSlice';
import { GrAttachment } from 'react-icons/gr';

const Post = () => {
  const [IsPopUpShow, setIsPopUpShow] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const fileInputRef = useRef(null);
  
  const dispatch = useDispatch();
  const { popup } = useSelector((state) => state.post);

  useEffect(() => {
    setIsPopUpShow(popup);
  }, [popup]);

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
    // console.log(files)
    // Create preview URLs for each file
    const urls = files.map(file => URL.createObjectURL(file));
    // console.log(urls);
    setPreviewUrls(urls);
  };

  // Clean up the object URLs when component unmounts or files change
  useEffect(() => {
    // console.log(previewUrls);
    return () => {
      previewUrls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  return (
    <div className={`${IsPopUpShow ? "block" : "hidden"} w-2/3 md:w-1/2 pt-4 md:pt-2 absolute bg-base-100 border border-neutral z-10 rounded-md translate-x-20 md:translate-x-77`}>
      <form action="" className="md:px-3 relative">
        <h3 className="text-center text-lg">Post</h3>
        <button className="btn btn-neutral btn-circle absolute -top-2 md:top-1 right-3" onClick={popupHandler}>x</button>
        
        <select className="focus:outline-none border-primary rounded-md ml-5.5 md:ml-10 mt-5 p-1">
          <option defaultChecked={true}>Sell</option>
          <option>Regular</option>
        </select>

        <div className="relative border border-dotted w-7/8 ml-5.5 md:ml-10 my-3 md:p-1 h-40 md:h-50 flex flex-col">
          <textarea 
            name="" 
            id="" 
            className="resize-none border-none focus:outline-none w-full h-30 p-1 md:h-37 overflow-scroll" 
            placeholder="Description ..."
          ></textarea>
          <div className="flex items-center mt-4 ml-1">
            <GrAttachment className="text-lg cursor-pointer" onClick={handleAttachmentClick} />
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              multiple 
              accept="image/*"
              onChange={handleFileChange} 
            />
            {/* Display preview thumbnails */}
            {previewUrls.length > 0 && (
              <div className="flex overflow-x-scroll ml-3 space-x-2">
                {previewUrls.map((url, index) => (
                  <img key={index} src={url} alt={`preview ${index}`} className="w-12 h-12 object-cover rounded border" />
                ))}
              </div>
            )}
          </div>
        </div>

        <button className="btn btn-neutral w-7/8 ml-5.5 md:ml-10 mb-5">Post</button>
      </form>
    </div>
  );
};

export default Post;
