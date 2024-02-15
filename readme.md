# Architecture and Structure of the project

This is a frontend web project based on the 7-1 SASS architecture. This is an adaptation to the size of the project to use only the necessary part of the architecture.

```
sass/
|
|– utils/
|   |– _variables.scss              # Sass Variables
|   |– _mixins.scss                 # Sass Mixins
|
|– base/
|   |– normalise.scss               # Reset/normalize
|   |– _typography.scss             # Typography rules
|   ...                             # Etc…
|
|– components/
|   |– _buttons.scss                # Buttons
|   |– _components.scss             # components
|   |– _pricingCard.scss            # pricingCard
|   ...                             # Etc…
|
|– layout/
|   |– _main-layout.scss  # Navigation
|   |– _secondary-layout.scss        # Grid system
|   |– _header.scss                  # Header
|   |– _footer.scss                  # Footer
|   |– _partners.scss                # Sidebar
|   |– -free-trial-cta.scss          # Call to action
|   |– -team-gallery.scss            # Gallery
|   ...                  # Etc…
|
|– pages/
|   |– _home.scss                     # Home specific styles
|   |– _contact.scss                  # Contact specific styles
|   |– _team.scss                     # Team specific styles
|   |– _pricing.scss                  # Pricing specific styles
|   ...                               # Etc…
|
|
`– main.scss             # Main Sass file
|
|
ressources/
|
|- icons
|- images
|- logos
|- video
|
css/
|
|- components.css
|- home.css
|- team.css
|- contact.css
|- normalise.css
|...
|
js/
|
```