import { BlockStack, Box, Button, Card, ChoiceList, InlineStack, List, Modal, Scrollable, Text } from '@shopify/polaris'
import { useCallback, useState } from 'react'

export function SheetExample() {
  const [sheetActive, setSheetActive] = useState(false)

  const [salesChannels] = useState([
    { value: 'onlineStore', label: 'Online Store' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'googleShopping', label: 'Google shopping' },
    { value: 'facebookMarketing', label: 'Facebook Marketing' },
  ])
  const [selected, setSelected] = useState<string[]>([])

  const toggleSheetActive = useCallback(() => setSheetActive(sheetActive => !sheetActive), [])
  const handleSelectedChange = useCallback((value: string[]) => setSelected(value), [])

  const selectedSalesChannels: { value: string; label: string }[] = []
  selected.forEach(selection => {
    salesChannels.forEach(channel => {
      if (channel.value === selection) {
        selectedSalesChannels.push(channel)
      }
    })
  })

  const hasSelectedSalesChannels = selectedSalesChannels.length > 0

  const salesChannelsCardMarkup = hasSelectedSalesChannels ? (
    <List>
      {selectedSalesChannels.map((channel, index) => (
        <List.Item key={index}>{channel.label}</List.Item>
      ))}
    </List>
  ) : (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <p>No sales channels selected</p>
      <Button onClick={toggleSheetActive}>Manage sales channels</Button>
    </div>
  )

  const salesChannelAction = hasSelectedSalesChannels
    ? [
        {
          onAction: toggleSheetActive,
          content: 'Manage sales channels',
        },
      ]
    : undefined

  return (
    <>
      <Card>
        <Box paddingInlineStart="400" paddingInlineEnd="400">
          <BlockStack>
            <InlineStack align="space-between">
              <Text variant="headingSm" as="h2">
                Product availability
              </Text>
              {salesChannelAction && (
                <Button onClick={salesChannelAction[0].onAction}>{salesChannelAction[0].content}</Button>
              )}
            </InlineStack>
            {salesChannelsCardMarkup}
          </BlockStack>
        </Box>
      </Card>
      <Modal open={sheetActive} onClose={toggleSheetActive} title="Manage sales channels">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Scrollable style={{ padding: '1rem', height: '100%' }}>
            <ChoiceList
              title="Select a sales channel"
              name="salesChannelsList"
              choices={salesChannels}
              selected={selected}
              titleHidden
              allowMultiple
              onChange={handleSelectedChange}
            />
          </Scrollable>
          <div
            style={{
              alignItems: 'center',
              borderTop: '1px solid #DFE3E8',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '1rem',
              width: '100%',
            }}
          >
            <Button onClick={toggleSheetActive}>Cancel</Button>
            <Button variant="primary" onClick={toggleSheetActive}>
              Done
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
