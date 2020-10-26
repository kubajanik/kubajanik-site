import Typography from 'typography'
import typographyTheme from 'typography-theme-moraga'

typographyTheme.overrideThemeStyles = () => ({
  'a:hover': {
    textDecoration: 'none',
    color: ''
  }
})

const typography = new Typography(typographyTheme)

export default typography