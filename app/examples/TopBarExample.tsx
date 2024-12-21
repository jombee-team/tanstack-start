import { ActionList, Icon, Text, TopBar } from '@shopify/polaris'
import { ArrowLeftIcon, QuestionCircleIcon } from '@shopify/polaris-icons'
import { useCallback, useState } from 'react'

export function TopBarExample({ onNavigationToggle }: { onNavigationToggle: () => void }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false)
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const toggleIsUserMenuOpen = useCallback(() => setIsUserMenuOpen(isUserMenuOpen => !isUserMenuOpen), [])

  const toggleIsSecondaryMenuOpen = useCallback(
    () => setIsSecondaryMenuOpen(isSecondaryMenuOpen => !isSecondaryMenuOpen),
    []
  )

  const handleSearchResultsDismiss = useCallback(() => {
    setIsSearchActive(false)
    setSearchValue('')
  }, [])

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value)
    setIsSearchActive(value.length > 0)
  }, [])

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: 'Back to Shopify', icon: ArrowLeftIcon }],
        },
        {
          items: [{ content: 'Community forums' }],
        },
      ]}
      name="Dharma"
      detail="Jaded Pixel"
      initials="D"
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  )

  const searchResultsMarkup = (
    <ActionList items={[{ content: 'Shopify help center' }, { content: 'Community forums' }]} />
  )

  const searchFieldMarkup = (
    <TopBar.SearchField onChange={handleSearchChange} value={searchValue} placeholder="Search" showFocusBorder />
  )

  const secondaryMenuMarkup = (
    <TopBar.Menu
      activatorContent={
        <span>
          <Icon source={QuestionCircleIcon} />
          <Text as="span" visuallyHidden>
            Secondary menu
          </Text>
        </span>
      }
      open={isSecondaryMenuOpen}
      onOpen={toggleIsSecondaryMenuOpen}
      onClose={toggleIsSecondaryMenuOpen}
      actions={[
        {
          items: [{ content: 'Community forums' }],
        },
      ]}
    />
  )

  return (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      secondaryMenu={secondaryMenuMarkup}
      searchResultsVisible={isSearchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={onNavigationToggle}
    />
  )
}
