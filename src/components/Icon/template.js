function template({ template }, opts, { componentName, jsx }) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] })

  const name = componentName.name.replace('Svg', '') // SvgArrowLeft > ArrowLeft
  return typeScriptTpl.ast`
    import * as React from 'react';
    export const ${name} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};
  `
}
module.exports = template
