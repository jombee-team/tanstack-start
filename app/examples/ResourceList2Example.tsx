import { ResourceItem, ResourceList, ResourceListProps, Text } from '@shopify/polaris'

import { useState } from 'react'
import { items } from './data/sampleData'

export function ResourceList2Example() {
  const [selectedItems, setSelectedItems] = useState<ResourceListProps['selectedItems']>([])
  return (
    <ResourceList
      pagination={{ hasNext: true }}
      resourceName={{ singular: 'blog post', plural: 'blog posts' }}
      items={items}
      selectedItems={selectedItems}
      onSelectionChange={setSelectedItems}
      selectable
      renderItem={item => {
        const { id, title, author } = item
        const authorMarkup = author ? <div>by {author}</div> : null
        return (
          <ResourceItem
            id={id}
            key={id}
            accessibilityLabel={`View details for ${title}`}
            name={title}
            onClick={id => console.log(id)}
          >
            <Text variant="bodyMd" fontWeight="bold" as="h3">
              {title}
            </Text>
            {authorMarkup}
          </ResourceItem>
        )
      }}
    />
  )
}
