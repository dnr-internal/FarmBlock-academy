import type { Category } from '../types'

export const categories: Category[] = [
  {
    id: 'trong-trot',
    name: 'Trồng trọt',
    shortName: 'Trồng trọt',
    description: 'Kiến thức nền tảng về cây trồng, đất, dinh dưỡng và mùa vụ.',
    icon: '🌾',
    color: 'from-moss-300 to-moss-500',
  },
  {
    id: 'chan-nuoi',
    name: 'Chăn nuôi',
    shortName: 'Chăn nuôi',
    description: 'Kỹ thuật chăn nuôi gia súc, gia cầm và thủy sản hiệu quả.',
    icon: '🐄',
    color: 'from-brand-500 to-brand-700',
  },
  {
    id: 'agtech',
    name: 'Nông nghiệp công nghệ cao',
    shortName: 'Công nghệ cao',
    description: 'IoT, nhà kính thông minh, drone, robot và tự động hóa nông trại.',
    icon: '🛰️',
    color: 'from-tech-400 to-tech-600',
  },
  {
    id: 'du-lieu-ai',
    name: 'Dữ liệu & AI trong nông nghiệp',
    shortName: 'Dữ liệu & AI',
    description: 'Nông nghiệp chính xác, cảm biến, dữ liệu lớn và trí tuệ nhân tạo.',
    icon: '🤖',
    color: 'from-tech-600 to-tech-800',
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Truy xuất nguồn gốc',
    shortName: 'Blockchain',
    description: 'Minh bạch chuỗi cung ứng nông sản bằng công nghệ chuỗi khối.',
    icon: '⛓️',
    color: 'from-brand-800 to-brand-950',
  },
  {
    id: 'ben-vung',
    name: 'Nông nghiệp bền vững',
    shortName: 'Bền vững',
    description: 'Canh tác thân thiện môi trường, tiết kiệm tài nguyên và thích ứng khí hậu.',
    icon: '🌍',
    color: 'from-moss-500 to-moss-700',
  },
]

export function getCategory(id: string) {
  return categories.find((c) => c.id === id)
}
