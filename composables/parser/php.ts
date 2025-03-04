import { phpTemplate } from './template'
import type { LanguageOption, Parser } from './index'
import type * as PhpParser from 'php-parser'

// @unocss-include

const phpParser: Parser<
  { default: typeof PhpParser.Engine },
  {
    lexer?: Partial<PhpParser.Lexer>
    ast?: Partial<PhpParser.AST>
    parser?: Partial<PhpParser.Parser>
  }
> = {
  id: 'php-parser',
  label: 'php-parser',
  icon: 'i-vscode-icons:file-type-php',
  link: 'https://github.com/glayzzle/php-parser',
  editorLanguage: 'php',
  options: {
    configurable: true,
    defaultValue: {
      ast: { withPositions: true },
      parser: {},
    },
    editorLanguage: 'json',
  },
  pkgName: 'php-parser',
  parse(code, options) {
    const parser = new this.default({ ...options })
    return parser.parseCode(code, 'foo.php')
  },
  getNodeLocation: genGetNodeLocation('php'),
}

export const php: LanguageOption = {
  label: 'PHP',
  icon: 'i-vscode-icons:file-type-php',
  parsers: [phpParser],
  codeTemplate: phpTemplate,
}
