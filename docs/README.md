---
description: How to migrate from Drupal to Craft CMS
---

## Introduction
This plugin is a [Craft CMS](https://craftcms.com/) plugin -currently available as a service- for importing content from Drupal to Craft CMS based on Craft's [Feed Me](https://plugins.craftcms.com/feed-me) plugin.

## Requirement
* Drupal higher than 8.7.x.
  * HTTP Basic Authentication and JSON:API core modules.
  * Drupal user to read JSON:API.

* Latest version of Craft 3

::: tip
Drupal 6 and 7 can be converted to 8 or 9 by [Drupal core Migrate modules](https://www.drupal.org/docs/core-modules-and-themes/core-modules/migrate-module/migrate-overview). 
:::

## How migration works
This plugin connects to Drupal via JSON API.   
At first, the plugin fetches Drupal fields and generates a mapping table as shown in the image below.   
After mapping Drupal to Craft fields, the plugin creates requested [custom fields](https://craftcms.com/docs/3.x/table-fields.html#settings) -it can be a simple field -Plain text, Dropdown, ...- , a column in a [table field](https://craftcms.com/docs/3.x/table-fields.html#the-field), or even more complex a field in [super table field ](https://plugins.craftcms.com/super-table) or a field in a [Matrix field](https://craftcms.com/docs/3.x/matrix-fields.html#settings)- and then generates feeds based on the Feed-Me plugin.   
After running feeds, data is migrated to Craft CMS.

<div>
<CaptionedImage src="field-mapping.jpg" caption="Field mapping sample" widthClass="img-70"></CaptionedImage>
</div>

The plugin can detect Drupal Languages and migrate each language to a related [Craft site](https://craftcms.com/docs/3.x/sites.html). Drupal content with 'Not Specified' and 'Not Applicable' language can be migrated to the selected Craft site in the language mapping table.

<div>
<CaptionedImage src="language-mapping.jpg" caption="Language mapping sample" widthClass="img-50"></CaptionedImage>
</div>


### User
Drupal users and custom fields can be converted to [Craft's users](https://craftcms.com/docs/3.x/users.html).

### Media and file
The plugin migrates media and files to [Craft assets](https://craftcms.com/docs/3.x/assets.html) in two ways:
- After copying the Drupal files to Craft, files are added to Craft by [Asset index utility](https://docs.craftcms.com/feed-me/v4/guides/importing-assets.html).
- Media and files are migrated to Craft by Feed-Me based on the media type, file extension.   
   
The plugin helps to migrate files meta -description, display, alt, title- when the migration process happens.   
Currently files and media can be migrated to local volume. [Embedded Assets](https://plugins.craftcms.com/embeddedassets) is supported.

### Taxonomy
Taxonomies in Drupal can be converted to Craft's entries, [categories](https://craftcms.com/docs/3.x/categories.html), and [tags](https://craftcms.com/docs/3.x/tags.html).   
Tags in Craft have no hierarchy, so taxonomies with parent->child relationship should be migrated to Craft entries or categories.

### Block
Blocks can be migrated to Craft CMS in 3 ways:   
- each block is converted to one [Entry](https://craftcms.com/docs/3.x/entries.html). Channel or Structure Section for each block type is created manually before migration.
- each block is converted to a [Single](https://craftcms.com/docs/3.x/entries.html#singles). all required Single Sections and their fields are created automatically.
- each block is migrated to [Global](https://craftcms.com/docs/3.x/globals.html). The Global set and its fields are created automatically.

### Node
- Each node is migrated to entry. We create a [Channel](https://craftcms.com/docs/3.x/entries.html#channels) or [Structure](https://craftcms.com/docs/3.x/entries.html#structures) Section for each block type before migration. Fields are migrated automatically.

### Menu
This plugin can migrate menus to [Structure Sections](https://craftcms.com/docs/3.x/entries.html#structures) or [Navigation](https://plugins.craftcms.com/navigation) plugin.

----

::: tip
For all Drupal items, fields are created based on field mapping and added to [Craft Fieldlayout](https://craftcms.com/docs/3.x/fields.html#field-layouts) automatically.
:::

::: tip
This plugin tries to convert an internal Drupal link address to Craft internal link. for example, if there is a Drupal link field with a URL like /node/1 or /{node1-alias}, we try to get the address of that node on Craft and replace link URL with it.
:::


## Fields

This plugin supports the migration of most Drupal fields to the Craft core field.

#### Supported Drupal modules
- [Address field](https://www.drupal.org/project/address)   
All parts of the Address field can be migrated to fields or columns in a table, Super Table, or matrix field in Craft CMS.   
Country code can be migrated to plain text or drop-down in Craft. When the country part of the Address field is migrated to drop-down in Craft, all country codes are automatically added to drop-down options.

- [Block field](https://www.drupal.org/project/block_field)  
Block field is migrated to a text field where the text field's value is the UUID of that migrated block. You can query that block on Craft later.

- [Color field](https://www.drupal.org/project/color_field)   
The plugin can convert the Hex Color and opacity of that color to the Craft, where Color value is converted to Craft Color field and opacity to a plain text or number field.
Color and opacity in Craft can be paired in a Matrix, super table, or table.

- [Computed field](https://www.drupal.org/project/computed_field)   
Only computed field and their values -and not how field is computed- can be migrated to Craft field.

- [Physical field](https://www.drupal.org/project/physical)   
This plugin migrates all types of physical fields (area, dimension, length, measure, temp, volume, weight) to Craft. All physical units are added to Craft drop-down options.

- [Geo field](https://www.drupal.org/project/geofield)

- [Paragraph field](https://www.drupal.org/project/paragraphs)  
Paragraph fields can be converted to the table, super table, or Matrix field based on the fields used inside that Paragraph field.  

- [Table field](https://www.drupal.org/project/tablefield)   
Table field can be converted to table field in Craft.

- [Video field](https://www.drupal.org/project/video)   
Video field upload type can be migrated to Asset in Craft. Video field embed type can be migrated to plain text, url or [Embedded Assets](https://plugins.craftcms.com/embeddedassets).

- [Youtube field](https://www.drupal.org/project/youtube)   
Youtube field addresses can be migrated to Craft plain text or URL or [Embedded Assets](https://plugins.craftcms.com/embeddedassets).

#### Other Supported Craft CMS plugins
supported plugins available in plugin stores are:

[Redactor](https://plugins.craftcms.com/redactor)

[Ckeditor](https://plugins.craftcms.com/ckeditor)

## Demonstration

[Part 1 - Migration from Drupal to Craft CMS. how to connect to Drupal via JSON API](https://youtube.com/watch?v=R6omVzwHHtg)

[Part 2 - How to migrate Drupal users and media to Craft CMS](https://www.youtube.com/watch?v=1iCwBV6Brm0)

[Part 3 - How to migrate Drupal taxonomies to Craft CMS tags, categories and entries](https://www.youtube.com/watch?v=GJZ2qa7Ukmk)

[Part 4 - How to migrate Drupal blocks to Craft CMS entry or global](https://www.youtube.com/watch?v=FXHit_XhPDA)

[Part 5 - How to migrate Drupal nodes to Craft CMS entry](https://www.youtube.com/watch?v=qoU2bcew8iE)

[How to migrate Drupal menu to entry or navigation plugin](https://www.youtube.com/watch?v=evqVwTPKDf4)

[How to migrate Drupal paragraph to matrix and super table](https://www.youtube.com/watch?v=nwK-AoNjRh0)

## Pricing
Pricing depends on how complex your Drupal site is, but we make sure the price is affordable, especially for simple and low-budget sites.

## FAQ

:::details How can I download this plugin?

Currently, the plugin is only available as a service.
:::

:::details Is this plugin stable?

We tested this plugin with some Drupal sites, and it worked well. We need more Drupal sites to migrate and make this plugin stable.
:::

:::details I used a Drupal field which is not available on the supported list. What can I do?

Please let us know which Drupal field are you using. We will work to add support for it.
:::

:::details Is multilingual Drupal site is supported?

Yes, you can migrate multilingual Drupal sites to different Craft sites.
:::

:::details Is migrating sites with Domain module supported?

Currently, we are working on it, and we need more Drupal sites to test the migration process. Don't hesitate to contact us if you have a Drupal site with the Domain module.
:::

:::details Is migrating Drupal multi-site supported?

Currently, we are working on it, and we need more Drupal sites to test the migration process. If you have a Drupal multi-site, please get in touch with us.
:::

:::details What happens if I am not satisfied with the result of migration?

At first step, we try to migrate some items of your Drupal site for test and demonstartion purpose. If you are not satisfied with the result, there is no need to pay for it.
:::

## Contact Us
Feel free to contact me by email vnali.dev@gmail.com or direct message me, vnali on [Craft CMS Discord](https://craftcms.com/discord) channel.