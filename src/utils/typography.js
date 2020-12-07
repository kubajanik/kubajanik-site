import Typography from 'typography'
import typographyTheme from 'typography-theme-moraga'

typographyTheme.overrideThemeStyles = () => ({
  'a:hover': {
    textDecoration: 'none',
    color: ''
  }
})

typographyTheme.googleFonts = [{
  name: 'Source Sans Pro',
  styles: ['400', '700']
}]

const typography = new Typography(typographyTheme)

export default typography