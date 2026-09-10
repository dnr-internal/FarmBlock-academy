import type { Category } from '../types'

export const categories: Category[] = [
  {
    id: 'trong-trot',
    name: 'Trồng trọt',
    shortName: 'Trồng trọt',
    description: 'Kiến thức nền tảng về cây trồng, đất, dinh dưỡng và mùa vụ.',
    icon: '🌾',
    color: 'from-lime-500 to-green-600',
  },
  {
    id: 'chan-nuoi',
    name: 'Chăn nuôi',
    shortName: 'Chăn nuôi',
    description: 'Kỹ thuật chăn nuôi gia súc, gia cầm và thủy sản hiệu quả.',
    icon: '🐄',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'agtech',
    name: 'Nông nghiệp công nghệ cao',
    shortName: 'Công nghệ cao',
    description: 'IoT, nhà kính thông minh, drone, robot và tự động hóa nông trại.',
    icon: '🛰️',
    color: 'from-sky-500 to-blue-600',
  },
  {
    id: 'du-lieu-ai',
    name: 'Dữ liệu & AI trong nông nghiệp',
    shortName: 'Dữ liệu & AI',
    description: 'Nông nghiệp chính xác, cảm biến, dữ liệu lớn và trí tuệ nhân tạo.',
    icon: '🤖',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Truy xuất nguồn gốc',
    shortName: 'Blockchain',
    description: 'Minh bạch chuỗi cung ứng nông sản bằng công nghệ chuỗi khối.',
    icon: '⛓️',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'ben-vung',
    name: 'Nông nghiệp bền vững',
    shortName: 'Bền vững',
    description: 'Canh tác thân thiện môi trường, tiết kiệm tài nguyên và thích ứng khí hậu.',
    icon: '🌍',
    color: 'from-teal-500 to-cyan-600',
  },
]

export function getCategory(id: string) {
  return categories.find((c) => c.id === id)
}
