import type { UseHandleKeyboardEvents } from './types.d';
/**
 * Handles keyboard pop out by adjusting sheet's layout when a `TextInput` within
 * the sheet receives focus.
 *
 * @param {boolean} keyboardHandlingEnabled Determines whether this hook will go on to handle keyboard
 * @param {number} sheetHeight Initial sheet's height before keyboard pop out
 * @param {boolean} sheetOpen Indicates whether the sheet is open or closed
 * @param {HeightAnimationDriver} heightAnimationDriver Animator function to be called with new
 * sheet height when keyboard is out so it can adjust the sheet height with animation
 * @param {React.MutableRefObject<View>} contentWrapperRef Reference to the content wrapper view
 * @return {{removeKeyboardListeners:Function;} | null} An Object with an unsubscriber function or `null`
 *  when `keyboardHandlingEnabled` is false
 */
declare const useHandleKeyboardEvents: UseHandleKeyboardEvents;
export default useHandleKeyboardEvents;
//# sourceMappingURL=index.d.ts.map