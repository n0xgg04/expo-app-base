import { type ViewStyle } from 'react-native';
import type { SheetStyleProp } from '../components/bottomSheet/types';
type PadProps = 'padding' | 'paddingBottom' | 'paddingEnd' | 'paddingHorizontal' | 'paddingLeft' | 'paddingRight' | 'paddingStart' | 'paddingTop' | 'paddingVertical';
type Styles = {
    paddingStyles: Pick<ViewStyle, PadProps>;
    otherStyles: Omit<ViewStyle, PadProps>;
};
/**
 * Extracts and separates `padding` styles from
 * other styles from the given `style`
 */
declare const separatePaddingStyles: (style: SheetStyleProp | undefined) => Styles | undefined;
export default separatePaddingStyles;
//# sourceMappingURL=separatePaddingStyles.d.ts.map