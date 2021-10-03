import {__} from '@wordpress/i18n';
import {registerBlockType} from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import Save from './save';
import Icons from "../../helpers/icons";

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
