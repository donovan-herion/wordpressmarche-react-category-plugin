# React Category Plugin

This plugin provides a filter for the category.php pages that runs on a single page.

## Installation

Clone this repo into the mu-plugins folder of your wordpress configuration.

```bash
git clone git@github.com:donovan-herion/wordpressmarche-react-category-plugin.git
```

call the plugin in the load.php file so that it runs on the wordpress site by default.

```bash
require_once WPMU_PLUGIN_DIR . '/react-category-plugin/react-category-plugin.php';
```

## Usage

```php
get_header();

echo do_shortcode('[react_category_plugin]');

get_footer();
```
