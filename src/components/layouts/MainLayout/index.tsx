import React from "react"
import Box,  { BoxProps } from "../../atoms/Box"

type MainLayoutProps = BoxProps & {
  contentSortOptions: React.ReactNode,
  contentButton: React.ReactNode,
  contentTableLoader: React.ReactNode,
  contentTable: React.ReactNode,
}

const MainLayout = (props: MainLayoutProps) => {
  const {
    contentSortOptions,
    contentButton,
    contentTable,
    contentTableLoader,
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
          position: 'relative',
          minHeight: '100px',
        }}
      >
        {
          contentTableLoader ?
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(255, 255, 255, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {contentTableLoader}
            </Box>
            :
            null
        }
        {contentTable}
      </Box>
    </Box>
  )
}

export default MainLayout
