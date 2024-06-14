import ModalBackdrop from "@/components/layout/ModalBackdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";
import React from "react";

export default async function InterceptedImagePage({ params }: any) {
  const slug = params.slug;

  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      {/* <div className="modal-backdrop" onClick={() => router.back('.')} /> */}
      {/* <div className="modal-backdrop" onClick={router.back} /> */}
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
