/*
 Edit function for the block.
 */
import {__} from '@wordpress/i18n';
import {useBlockProps} from '@wordpress/block-editor';

export default function Save({attributes}) {
    return (
        <p {...useBlockProps.save()}>
            {__('Blank Blocks Plugin - Just a placeholder!', 'blank-blocks-plugin')}
        </p>
    );
}
