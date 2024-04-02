import React from "react"
import Box,  { BoxProps } from "../../atoms/Box"

type MainLayoutProps = BoxProps & {
  contentSortOptions: React.ReactNode,
  contentButton: React.ReactNode,
  contentTable: React.ReactNode,
}

const MainLayout = (props: MainLayoutProps) => {
  const {
    contentSortOptions,
    contentButton,
    contentTable,
    ...otherProps
  } = props

  return (
    <Box
      {...otherProps}
    >
      <Box
        sx={{
          padding: '10px',
        }}
      >
        {contentSortOptions}
      </Box>
      <Box
        sx={{
          padding: '10px',
        }}
      >
        {contentButton}
      </Box>
      <Box
        sx={{
          padding: '10px',
        }}
      >
        {contentTable}
      </Box>
    </Box>
  )
}

export default MainLayout
