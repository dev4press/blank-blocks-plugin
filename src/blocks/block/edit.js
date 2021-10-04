/*
 Edit function for the block.
 */
import {__} from '@wordpress/i18n';
import {useBlockProps} from '@wordpress/block-editor';

/*
 Include SASS file with editor styling only for the block.
 This will be compiled into file loaded only inside the editor.
 If you don't have dedicated styling file for the block, remove this.
 */
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
    return (
        <p {...useBlockProps()}>
            {__('Blank Blocks Plugin - Just a placeholder!', 'blank-blocks-plugin')}
        </p>
    );
}
