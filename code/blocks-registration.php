<?php

namespace Dev4Press\Plugins\BlankBlocksPlugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Blocks {
	public function __construct() {
		add_filter( 'block_categories_all', array( $this, 'categories' ) );
		add_action( 'init', array( $this, 'register_files' ) );
		add_action( 'init', array( $this, 'register_blocks' ) );
	}

	public static function instance() : Blocks {
		static $instance = null;

		if ( ! isset( $instance ) ) {
			$instance = new Blocks();
		}

		return $instance;
	}

	public function categories( $categories ) : array {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'blank-blocks',
					'title' => __( "Blank Blocks", "blank-blocks-plugin" )
				)
			)
		);
	}

	public function register_files() {
		$asset_file = include( BLANK_BLOCKS_PLUGIN_PATH . 'build/index.asset.php' );

		wp_register_script( 'blank-blocks-editor', BLANK_BLOCKS_PLUGIN_URL . 'build/index.js', $asset_file['dependencies'], $asset_file['version'] );
		wp_register_style( 'blank-blocks-editor', BLANK_BLOCKS_PLUGIN_URL . 'build/index.css', array(), $asset_file['version'] );
		wp_register_style( 'blank-blocks-front', BLANK_BLOCKS_PLUGIN_URL . 'build/style-index.css', array(), $asset_file['version'] );
	}

	public function register_blocks() {
		register_block_type( 'millan-dev/blank-block', array(
			'textdomain'    => 'blank-blocks-plugin',
			'editor_script' => 'blank-blocks-editor',
			'editor_style'  => 'blank-blocks-editor',
			'style'         => 'blank-blocks-front'
		) );
	}
}
