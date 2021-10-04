/*
 Main file for a block, using import directives to load various core libraries.
 */
import {__} from '@wordpress/i18n';
import {registerBlockType} from '@wordpress/blocks';

/*
 Include SASS file with styling for the block.
 If you don't have dedicated styling file for the block, remove this.
 */
import './style.scss';

/*
 * Import functions for Edit and Save, and Icons constant with SVG icons.
 */
import Edit from './edit';
import Save from './save';
import Icons from "../../helpers/icons";

/*
 * Register the new block
 */
registerBlockType('millan-dev/blank-block', {
    apiVersion: 2,
    name: 'millan-dev/blank-block',
    title: __('Blank Block', 'blank-blocks-plugin'),
    description: __('Simple blank block', 'blank-blocks-plugin'),
    category: 'widgets',
    icon: Icons.icon,
    supports: {},
    attributes: {},
    edit: Edit,
    save: Save,
});
