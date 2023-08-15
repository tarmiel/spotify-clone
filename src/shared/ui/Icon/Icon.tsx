import { SVGProps } from 'react';

import * as IconsFilled from '../../assets/icons/filled';
import * as IconsOutlined from '../../assets/icons/outlined';

export const IconsMap = {
  outlined: IconsOutlined,
  filled: IconsFilled,
};

type IconType = keyof typeof IconsMap;

interface IIconProps<T extends IconType> extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  type: T;
  name: keyof (typeof IconsMap)[T];
}

const Icon = <T extends IconType>({
  type,
  name,
  width = '16',
  height = '16',
  ...props
}: IIconProps<T>): JSX.Element => {
  const SVGIcon = IconsMap[type][name];

  return <SVGIcon width={width} height={height} {...props} />;
};

export default Icon;
