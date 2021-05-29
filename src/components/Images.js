import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useDebounce from "../utils/hooks/useDebounce";
import useFetchImage from "../utils/hooks/useFetchImage";
import Image from "./image";
import Loading from "./Loading";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function Images() {
  const [Page, setPage] = useState(1);
  const [SearchItem, setSearchItem] = useState(null);
  const [Images, setImages, Errors, IsLoading] = useFetchImage(
    Page,
    SearchItem
  );

  const [ShowPreview, setShowPreview] = useState(false);


  function handleRemove(index) {
    setImages([
      ...Images.slice(0, index),
      ...Images.slice(index + 1, Images.length),
    ]);
  }

  const debounce = useDebounce();
  function handleSearch(e) {
    const text = e.target.value;
    debounce(() => setSearchItem(text));
  }

  return (
    <section>
      <div className="my-5">
        <input
          type="text"
          onChange={handleSearch}
          className="w-full border rounded shadow p-2"
          placeholder="Search Photos Here"
        />
      </div>
      {Errors.length > 0 && (
        <div className="flex h-screen">
          <p className="m-auto"> {Errors[0]}</p>
        </div>
      )}
      <AnimateSharedLayout>
        <InfiniteScroll
          dataLength={Images.length}
          next={() => setPage(Page + 1)}
          hasMore={true}
          className="flex flex-wrap -mx-4"
        >
            {Images.map((img, index) => (
                <motion.div
                  className="md:w-1/5 px-4 mb-8"
                  key={index}
                  layoutId={img.urls.regular}
                >
                  <Image
                    show={() => setShowPreview(index)}
                    image={img.urls.regular}
                    handleRemove={handleRemove}
                    index={index}
                  />
                </motion.div>
            ))}
        </InfiniteScroll>
        <AnimatePresence>
          {ShowPreview && (
            <motion.section
              layoutId={ShowPreview}
              exit={{ opacity: 0, rotate: 360 }}
              className="fixed w-full h-full flex justify-center items-center top-0 left-0 z-40"
              onClick={() => setShowPreview(false)}
            >
              <div className="bg-white">
                <img
                  src={ShowPreview}
                  width="400"
                  height="400"
                  alt="My Awesome"
                />
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
      {IsLoading && <Loading />}
    </section>
  );
}
