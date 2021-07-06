function template({ template }, opts, { componentName, jsx }) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] })

  const name = componentName.name.replace('Svg', '') // SvgArrowLeft > ArrowLeft
  return typeScriptTpl.ast`
    import * as React from 'react';

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    const ${name} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};

    export default ${name}
  `
}
module.exports = template
