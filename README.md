# FarmBlock Academy

Web app tra cứu kiến thức nông nghiệp & nông nghiệp công nghệ cao, kèm hệ thống quiz để tự kiểm tra
kiến thức. Toàn bộ nội dung được đóng gói sẵn (không cần backend, không cần database), nên có thể
**host miễn phí hoàn toàn**.

## Tính năng

- **Thư viện kiến thức**: 13 bài viết thuộc 6 chủ đề — Trồng trọt, Chăn nuôi, Nông nghiệp công nghệ cao
  (IoT, nhà kính thông minh, drone, robot), Dữ liệu & AI, Blockchain & truy xuất nguồn gốc, Nông nghiệp
  bền vững. Có tìm kiếm và lọc theo chủ đề.
- **Quiz kiểm tra kiến thức**: 48 câu hỏi trắc nghiệm theo chủ đề và độ khó (dễ/trung bình/khó), chấm
  điểm tức thì kèm giải thích chi tiết cho từng câu.
- **Lịch sử kết quả**: lưu lại các lần làm bài trên trình duyệt (localStorage) — không có server, không
  thu thập dữ liệu người dùng.

## Chạy thử ở máy local

```bash
npm install
npm run dev
```

Mở trình duyệt tại địa chỉ hiển thị trong terminal (mặc định `http://localhost:5173/FarmBlock-academy/`).

Build bản production:

```bash
npm run build
npm run preview
```

## Deploy miễn phí (không tốn chi phí)

Dự án là một static site (React + Vite), có thể host miễn phí trên nhiều nền tảng. Repo này đã có sẵn
GitHub Actions workflow (`.github/workflows/deploy.yml`) để deploy lên **GitHub Pages** — cách đơn giản
và miễn phí nhất:

1. Merge nhánh này vào `main`.
2. Vào **Settings → Pages** của repository trên GitHub, chọn nguồn (Source) là **GitHub Actions**.
3. Mỗi lần push vào `main`, workflow sẽ tự động build và deploy. Trang sẽ có địa chỉ dạng:
   `https://<tên-tổ-chức>.github.io/FarmBlock-academy/`

### Các lựa chọn miễn phí khác

- **Vercel** (gói Hobby miễn phí): import repo, để mặc định framework preset là Vite, deploy.
- **Netlify** (gói Free): `Build command: npm run build`, `Publish directory: dist`.
- **Cloudflare Pages** (gói Free): tương tự Netlify.

Nếu deploy trên Vercel/Netlify/Cloudflare Pages (không phải GitHub Pages), cần đổi `base` trong
`vite.config.ts` về `'/'` và bỏ `basename` trong `src/App.tsx`, vì các nền tảng này serve app ở domain
gốc chứ không phải dưới thư mục con `/FarmBlock-academy/`.

## Thêm nội dung mới

- Bài viết kiến thức: thêm vào mảng `articles` trong `src/data/articles.ts`.
- Câu hỏi quiz: thêm vào mảng `quizQuestions` trong `src/data/quizzes.ts`.
- Danh mục/chủ đề: chỉnh `src/data/categories.ts`.

Không cần backend hay database — mọi nội dung là dữ liệu tĩnh trong mã nguồn, giúp việc host và bảo trì
hoàn toàn miễn phí.

## Công nghệ sử dụng

React 19, TypeScript, Vite, React Router, Tailwind CSS.
