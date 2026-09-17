export default function AcademyLinkBanner() {
  return (
    <section className="flex flex-col items-center gap-4 rounded-3xl border border-brand-200 bg-brand-50 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <div>
        <h2 className="text-lg font-bold text-stone-800">Muốn đọc đầy đủ bài viết gốc?</h2>
        <p className="mt-1 text-sm text-stone-500">
          Ghé thăm farmblock.vn/academy để đọc bài viết ở định dạng đầy đủ, kèm hình ảnh minh họa và
          cập nhật kiến thức mới nhất từ đội ngũ FarmBlock.
        </p>
      </div>
      <a
        href="https://farmblock.vn/academy/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-700 px-6 py-3 font-semibold text-white shadow transition hover:bg-brand-800"
      >
        🌐 Đọc đầy đủ tại farmblock.vn
      </a>
    </section>
  )
}
