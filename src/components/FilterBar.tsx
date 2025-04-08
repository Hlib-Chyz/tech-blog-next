'use client'

import { useTranslations } from 'next-intl'

export default function FilterBar({
  categories,
  tags,
  onFilterChange,
}: {
  categories: string[]
  tags: string[]
  onFilterChange: (filter: { category?: string; tag?: string }) => void
}) {
  const t = useTranslations()
  return (
    <div className="flex gap-4 mb-6">
      <select
        onChange={(e) => onFilterChange({ category: e.target.value })}
        className="border rounded-lg p-2"
      >
        <option value="">{t('filterAllCategories')}</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => onFilterChange({ tag: e.target.value })}
        className="border rounded-lg p-2"
      >
        <option value="">{t('filterAllTags')}</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  )
}
