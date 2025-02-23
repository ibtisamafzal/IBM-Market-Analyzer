# IBM Market Analyzer

## Project Description

IBM Market Analyzer is an AI-powered platform that provides advanced sentiment analysis and market trend predictions. Leveraging IBM Granite AI models and Bing News Search API, this project aims to transform complex market data into actionable insights. It is designed for analysts, startup founders, business owners, and VC firms seeking market intelligence.

## Features

- **AI-Powered Analysis**: Utilizes IBM Granite AI models for sentiment analysis.
- **Real-Time Insights**: Provides live market news and sentiment analysis.
- **Smart Decisions**: Offers data-driven business recommendations.
- **Multiple Use Cases**: Suitable for various market intelligence needs.

## Project Structure

```
IBM-Analyzer
├─ backend
│  ├─ app
│  │  ├─ config.py
│  │  ├─ main.py
│  │  ├─ models
│  │  ├─ routes
│  │  │  ├─ news_routes.py
│  │  │  ├─ __init__.py
│  │  │  └─ __pycache__
│  │  │     ├─ news_routes.cpython-312.pyc
│  │  │     └─ __init__.cpython-312.pyc
│  │  ├─ services
│  │  ├─ utils.py
│  │  ├─ __init__.py
│  │  └─ __pycache__
│  │     ├─ main.cpython-312.pyc
│  │     └─ __init__.cpython-312.pyc
│  ├─ manifest.yml
│  ├─ requirements.txt
│  └─ run.py
├─ deployment
│  └─ cloud-config
├─ frontend
│  ├─ .vercel
│  │  ├─ project.json
│  │  └─ README.txt
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ index.html
│  ├─ src
│  │  ├─ App.js
│  │  ├─ components
│  │  │  ├─ Footer.js
│  │  │  ├─ Header.js
│  │  │  ├─ NewsCard.js
│  │  │  └─ SentimentMeter.js
│  │  ├─ custom.css
│  │  ├─ index.js
│  │  ├─ pages
│  │  │  ├─ About.js
│  │  │  ├─ Contact.js
│  │  │  ├─ Home.js
│  │  │  └─ Team.js
│  │  └─ services
│  │     └─ api.js
│  └─ vercel.json
├─ IBM-Analyzer.zip
├─ package-lock.json
├─ package.json
├─ README.md
├─ requirements.txt
└─ venv
   ├─ Include
   ├─ Lib
   │  └─ site-packages
   │     ├─ blinker
   │     │  ├─ base.py
   │     │  ├─ py.typed
   │     │  ├─ _utilities.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ base.cpython-312.pyc
   │     │     ├─ _utilities.cpython-312.pyc
   │     │     └─ __init__.cpython-312.pyc
   │     ├─ blinker-1.9.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ certifi
   │     │  ├─ cacert.pem
   │     │  ├─ core.py
   │     │  ├─ py.typed
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ core.cpython-312.pyc
   │     │     ├─ __init__.cpython-312.pyc
   │     │     └─ __main__.cpython-312.pyc
   │     ├─ certifi-2025.1.31.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ charset_normalizer
   │     │  ├─ api.py
   │     │  ├─ cd.py
   │     │  ├─ cli
   │     │  │  ├─ __init__.py
   │     │  │  ├─ __main__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ __init__.cpython-312.pyc
   │     │  │     └─ __main__.cpython-312.pyc
   │     │  ├─ constant.py
   │     │  ├─ legacy.py
   │     │  ├─ md.cp312-win_amd64.pyd
   │     │  ├─ md.py
   │     │  ├─ md__mypyc.cp312-win_amd64.pyd
   │     │  ├─ models.py
   │     │  ├─ py.typed
   │     │  ├─ utils.py
   │     │  ├─ version.py
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ api.cpython-312.pyc
   │     │     ├─ cd.cpython-312.pyc
   │     │     ├─ constant.cpython-312.pyc
   │     │     ├─ legacy.cpython-312.pyc
   │     │     ├─ md.cpython-312.pyc
   │     │     ├─ models.cpython-312.pyc
   │     │     ├─ utils.cpython-312.pyc
   │     │     ├─ version.cpython-312.pyc
   │     │     ├─ __init__.cpython-312.pyc
   │     │     └─ __main__.cpython-312.pyc
   │     ├─ charset_normalizer-3.4.1.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ click
   │     │  ├─ core.py
   │     │  ├─ decorators.py
   │     │  ├─ exceptions.py
   │     │  ├─ formatting.py
   │     │  ├─ globals.py
   │     │  ├─ parser.py
   │     │  ├─ py.typed
   │     │  ├─ shell_completion.py
   │     │  ├─ termui.py
   │     │  ├─ testing.py
   │     │  ├─ types.py
   │     │  ├─ utils.py
   │     │  ├─ _compat.py
   │     │  ├─ _termui_impl.py
   │     │  ├─ _textwrap.py
   │     │  ├─ _winconsole.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ core.cpython-312.pyc
   │     │     ├─ decorators.cpython-312.pyc
   │     │     ├─ exceptions.cpython-312.pyc
   │     │     ├─ formatting.cpython-312.pyc
   │     │     ├─ globals.cpython-312.pyc
   │     │     ├─ parser.cpython-312.pyc
   │     │     ├─ shell_completion.cpython-312.pyc
   │     │     ├─ termui.cpython-312.pyc
   │     │     ├─ testing.cpython-312.pyc
   │     │     ├─ types.cpython-312.pyc
   │     │     ├─ utils.cpython-312.pyc
   │     │     ├─ _compat.cpython-312.pyc
   │     │     ├─ _termui_impl.cpython-312.pyc
   │     │     ├─ _textwrap.cpython-312.pyc
   │     │     ├─ _winconsole.cpython-312.pyc
   │     │     └─ __init__.cpython-312.pyc
   │     ├─ click-8.1.8.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ colorama
   │     │  ├─ ansi.py
   │     │  ├─ ansitowin32.py
   │     │  ├─ initialise.py
   │     │  ├─ tests
   │     │  │  ├─ ansitowin32_test.py
   │     │  │  ├─ ansi_test.py
   │     │  │  ├─ initialise_test.py
   │     │  │  ├─ isatty_test.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ winterm_test.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ ansitowin32_test.cpython-312.pyc
   │     │  │     ├─ ansi_test.cpython-312.pyc
   │     │  │     ├─ initialise_test.cpython-312.pyc
   │     │  │     ├─ isatty_test.cpython-312.pyc
   │     │  │     ├─ utils.cpython-312.pyc
   │     │  │     ├─ winterm_test.cpython-312.pyc
   │     │  │     └─ __init__.cpython-312.pyc
   │     │  ├─ win32.py
   │     │  ├─ winterm.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ ansi.cpython-312.pyc
   │     │     ├─ ansitowin32.cpython-312.pyc
   │     │     ├─ initialise.cpython-312.pyc
   │     │     ├─ win32.cpython-312.pyc
   │     │     ├─ winterm.cpython-312.pyc
   │     │     └─ __init__.cpython-312.pyc
   │     ├─ colorama-0.4.6.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ dotenv
   │     │  ├─ cli.py
   │     │  ├─ ipython.py
   │     │  ├─ main.py
   │     │  ├─ parser.py
   │     │  ├─ py.typed
   │     │  ├─ variables.py
   │     │  ├─ version.py
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ cli.cpython-312.pyc
   │     │     ├─ ipython.cpython-312.pyc
   │     │     ├─ main.cpython-312.pyc
   │     │     ├─ parser.cpython-312.pyc
   │     │     ├─ variables.cpython-312.pyc
   │     │     ├─ version.cpython-312.pyc
   │     │     ├─ __init__.cpython-312.pyc
   │     │     └─ __main__.cpython-312.pyc
   │     ├─ flask
   │     │  ├─ app.py
   │     │  ├─ blueprints.py
   │     │  ├─ cli.py
   │     │  ├─ config.py
   │     │  ├─ ctx.py
   │     │  ├─ debughelpers.py
   │     │  ├─ globals.py
   │     │  ├─ helpers.py
   │     │  ├─ json
   │     │  │  ├─ provider.py
   │     │  │  ├─ tag.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ provider.cpython-312.pyc
   │     │  │     ├─ tag.cpython-312.pyc
   │     │  │     └─ __init__.cpython-312.pyc
   │     │  ├─ logging.py
   │     │  ├─ py.typed
   │     │  ├─ sansio
   │     │  │  ├─ app.py
   │     │  │  ├─ blueprints.py
   │     │  │  ├─ README.md
   │     │  │  ├─ scaffold.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ app.cpython-312.pyc
   │     │  │     ├─ blueprints.cpython-312.pyc
   │     │  │     └─ scaffold.cpython-312.pyc
   │     │  ├─ sessions.py
   │     │  ├─ signals.py
   │     │  ├─ templating.py
   │     │  ├─ testing.py
   │     │  ├─ typing.py
   │     │  ├─ views.py
   │     │  ├─ wrappers.py
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  └─ __pycache__
   │     │     ├─ app.cpython-312.pyc
   │     │     ├─ blueprints.cpython-312.pyc
   │     │     ├─ cli.cpython-312.pyc
   │     │     ├─ config.cpython-312.pyc
   │     │     ├─ ctx.cpython-312.pyc
   │     │     ├─ debughelpers.cpython-312.pyc
   │     │     ├─ globals.cpython-312.pyc
   │     │     ├─ helpers.cpython-312.pyc
   │     │     ├─ logging.cpython-312.pyc
   │     │     ├─ sessions.cpython-312.pyc
   │     │     ├─ signals.cpython-312.pyc
   │     │     ├─ templating.cpython-312.pyc
   │     │     ├─ testing.cpython-312.pyc
   │     │     ├─ typing.cpython-312.pyc
   │     │     ├─ views.cpython-312.pyc
   │     │     ├─ wrappers.cpython-312.pyc
   │     │     ├─ __init__.cpython-312.pyc
   │     │     └─ __main__.cpython-312.pyc
   │     ├─ flask-3.1.0.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  └─ WHEEL
   │     ├─ flask_cors
   │     │  ├─ core.py
   │     │  ├─ decorator.py
   │     │  ├─ extension.py
   │     │  ├─ version.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ core.cpython-312.pyc
   │     │     ├─ decorator.cpython-312.pyc
   │     │     ├─ extension.cpython-312.pyc
   │     │     ├─ version.cpython-312.pyc
   │     │     └─ __init__.cpython-312.pyc
   │     ├─ Flask_Cors-5.0.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ idna
   │     │  ├─ codec.py
   │     │  ├─ compat.py
   │     │  ├─ core.py
   │     │  ├─ idnadata.py
   │     │  ├─ intranges.py
   │     │  ├─ package_data.py
   │     │  ├─ py.typed
   │     │  ├─ uts46data.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ codec.cpython-312.pyc
   │     │     ├─ compat.cpython-312.pyc
   │     │     ├─ core.cpython-312.pyc
   │     │     ├─ idnadata.cpython-312.pyc
   │     │     ├─ intranges.cpython-312.pyc
   │     │     ├─ package_data.cpython-312.pyc
   │     │     ├─ uts46data.cpython-312.pyc
   │     │     └─ __init__.cpython-312.pyc
   │     ├─ idna-3.10.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.md
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ itsdangerous
   │     │  ├─ encoding.py
   │     │  ├─ exc.py
   │     │  ├─ py.typed
   │     │  ├─ serializer.py
   │     │  ├─ signer.py
   │     │  ├─ timed.py
   │     │  ├─ url_safe.py
   │     │  ├─ _json.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ encoding.cpython-312.pyc
   │     │     ├─ exc.cpython-312.pyc
   │     │     ├─ serializer.cpython-312.pyc
   │     │     ├─ signer.cpython-312.pyc
   │     │     ├─ timed.cpython-312.pyc
   │     │     ├─ url_safe.cpython-312.pyc
   │     │     ├─ _json.cpython-312.pyc
   │     │     └─ __init__.cpython-312.pyc
   │     ├─ itsdangerous-2.2.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ jinja2
   │     │  ├─ async_utils.py
   │     │  ├─ bccache.py
   │     │  ├─ compiler.py
   │     │  ├─ constants.py
   │     │  ├─ debug.py
   │     │  ├─ defaults.py
   │     │  ├─ environment.py
   │     │  ├─ exceptions.py
   │     │  ├─ ext.py
   │     │  ├─ filters.py
   │     │  ├─ idtracking.py
   │     │  ├─ lexer.py
   │     │  ├─ loaders.py
   │     │  ├─ meta.py
   │     │  ├─ nativetypes.py
   │     │  ├─ nodes.py
   │     │  ├─ optimizer.py
   │     │  ├─ parser.py
   │     │  ├─ py.typed
   │     │  ├─ runtime.py
   │     │  ├─ sandbox.py
   │     │  ├─ tests.py
   │     │  ├─ utils.py
   │     │  ├─ visitor.py
   │     │  ├─ _identifier.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ async_utils.cpython-312.pyc
   │     │     ├─ bccache.cpython-312.pyc
   │     │     ├─ compiler.cpython-312.pyc
   │     │     ├─ constants.cpython-312.pyc
   │     │     ├─ debug.cpython-312.pyc
   │     │     ├─ defaults.cpython-312.pyc
   │     │     ├─ environment.cpython-312.pyc
   │     │     ├─ exceptions.cpython-312.pyc
   │     │     ├─ ext.cpython-312.pyc
   │     │     ├─ filters.cpython-312.pyc
   │     │     ├─ idtracking.cpython-312.pyc
   │     │     ├─ lexer.cpython-312.pyc
   │     │     ├─ loaders.cpython-312.pyc
   │     │     ├─ meta.cpython-312.pyc
   │     │     ├─ nativetypes.cpython-312.pyc
   │     │     ├─ nodes.cpython-312.pyc
   │     │     ├─ optimizer.cpython-312.pyc
   │     │     ├─ parser.cpython-312.pyc
   │     │     ├─ runtime.cpython-312.pyc
   │     │     ├─ sandbox.cpython-312.pyc
   │     │     ├─ tests.cpython-312.pyc
   │     │     ├─ utils.cpython-312.pyc
   │     │     ├─ visitor.cpython-312.pyc
   │     │     ├─ _identifier.cpython-312.pyc
   │     │     └─ __init__.cpython-312.pyc
   │     ├─ jinja2-3.1.5.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ jsonify
   │     │  ├─ convert.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ convert.cpython-312.pyc
   │     │     └─ __init__.cpython-312.pyc
   │     ├─ jsonify-0.5.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ markupsafe
   │     │  ├─ py.typed
   │     │  ├─ _native.py
   │     │  ├─ _speedups.c
   │     │  ├─ _speedups.cp312-win_amd64.pyd
   │     │  ├─ _speedups.pyi
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ _native.cpython-312.pyc
   │     │     └─ __init__.cpython-312.pyc
   │     ├─ MarkupSafe-3.0.2.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ pip
   │     │  ├─ py.typed
   │     │  ├─ _internal
   │     │  │  ├─ build_env.py
   │     │  │  ├─ cache.py
   │     │  │  ├─ cli
   │     │  │  │  ├─ autocompletion.py
   │     │  │  │  ├─ base_command.py
   │     │  │  │  ├─ cmdoptions.py
   │     │  │  │  ├─ command_context.py
   │     │  │  │  ├─ index_command.py
   │     │  │  │  ├─ main.py
   │     │  │  │  ├─ main_parser.py
   │     │  │  │  ├─ parser.py
   │     │  │  │  ├─ progress_bars.py
   │     │  │  │  ├─ req_command.py
   │     │  │  │  ├─ spinners.py
   │     │  │  │  ├─ status_codes.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ autocompletion.cpython-312.pyc
   │     │  │  │     ├─ base_command.cpython-312.pyc
   │     │  │  │     ├─ cmdoptions.cpython-312.pyc
   │     │  │  │     ├─ command_context.cpython-312.pyc
   │     │  │  │     ├─ index_command.cpython-312.pyc
   │     │  │  │     ├─ main.cpython-312.pyc
   │     │  │  │     ├─ main_parser.cpython-312.pyc
   │     │  │  │     ├─ parser.cpython-312.pyc
   │     │  │  │     ├─ progress_bars.cpython-312.pyc
   │     │  │  │     ├─ req_command.cpython-312.pyc
   │     │  │  │     ├─ spinners.cpython-312.pyc
   │     │  │  │     ├─ status_codes.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ commands
   │     │  │  │  ├─ cache.py
   │     │  │  │  ├─ check.py
   │     │  │  │  ├─ completion.py
   │     │  │  │  ├─ configuration.py
   │     │  │  │  ├─ debug.py
   │     │  │  │  ├─ download.py
   │     │  │  │  ├─ freeze.py
   │     │  │  │  ├─ hash.py
   │     │  │  │  ├─ help.py
   │     │  │  │  ├─ index.py
   │     │  │  │  ├─ inspect.py
   │     │  │  │  ├─ install.py
   │     │  │  │  ├─ list.py
   │     │  │  │  ├─ search.py
   │     │  │  │  ├─ show.py
   │     │  │  │  ├─ uninstall.py
   │     │  │  │  ├─ wheel.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ cache.cpython-312.pyc
   │     │  │  │     ├─ check.cpython-312.pyc
   │     │  │  │     ├─ completion.cpython-312.pyc
   │     │  │  │     ├─ configuration.cpython-312.pyc
   │     │  │  │     ├─ debug.cpython-312.pyc
   │     │  │  │     ├─ download.cpython-312.pyc
   │     │  │  │     ├─ freeze.cpython-312.pyc
   │     │  │  │     ├─ hash.cpython-312.pyc
   │     │  │  │     ├─ help.cpython-312.pyc
   │     │  │  │     ├─ index.cpython-312.pyc
   │     │  │  │     ├─ inspect.cpython-312.pyc
   │     │  │  │     ├─ install.cpython-312.pyc
   │     │  │  │     ├─ list.cpython-312.pyc
   │     │  │  │     ├─ search.cpython-312.pyc
   │     │  │  │     ├─ show.cpython-312.pyc
   │     │  │  │     ├─ uninstall.cpython-312.pyc
   │     │  │  │     ├─ wheel.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ configuration.py
   │     │  │  ├─ distributions
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ installed.py
   │     │  │  │  ├─ sdist.py
   │     │  │  │  ├─ wheel.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-312.pyc
   │     │  │  │     ├─ installed.cpython-312.pyc
   │     │  │  │     ├─ sdist.cpython-312.pyc
   │     │  │  │     ├─ wheel.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ exceptions.py
   │     │  │  ├─ index
   │     │  │  │  ├─ collector.py
   │     │  │  │  ├─ package_finder.py
   │     │  │  │  ├─ sources.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ collector.cpython-312.pyc
   │     │  │  │     ├─ package_finder.cpython-312.pyc
   │     │  │  │     ├─ sources.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ locations
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ _distutils.py
   │     │  │  │  ├─ _sysconfig.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-312.pyc
   │     │  │  │     ├─ _distutils.cpython-312.pyc
   │     │  │  │     ├─ _sysconfig.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ main.py
   │     │  │  ├─ metadata
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ importlib
   │     │  │  │  │  ├─ _compat.py
   │     │  │  │  │  ├─ _dists.py
   │     │  │  │  │  ├─ _envs.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ _compat.cpython-312.pyc
   │     │  │  │  │     ├─ _dists.cpython-312.pyc
   │     │  │  │  │     ├─ _envs.cpython-312.pyc
   │     │  │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  │  ├─ pkg_resources.py
   │     │  │  │  ├─ _json.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-312.pyc
   │     │  │  │     ├─ pkg_resources.cpython-312.pyc
   │     │  │  │     ├─ _json.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ models
   │     │  │  │  ├─ candidate.py
   │     │  │  │  ├─ direct_url.py
   │     │  │  │  ├─ format_control.py
   │     │  │  │  ├─ index.py
   │     │  │  │  ├─ installation_report.py
   │     │  │  │  ├─ link.py
   │     │  │  │  ├─ scheme.py
   │     │  │  │  ├─ search_scope.py
   │     │  │  │  ├─ selection_prefs.py
   │     │  │  │  ├─ target_python.py
   │     │  │  │  ├─ wheel.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ candidate.cpython-312.pyc
   │     │  │  │     ├─ direct_url.cpython-312.pyc
   │     │  │  │     ├─ format_control.cpython-312.pyc
   │     │  │  │     ├─ index.cpython-312.pyc
   │     │  │  │     ├─ installation_report.cpython-312.pyc
   │     │  │  │     ├─ link.cpython-312.pyc
   │     │  │  │     ├─ scheme.cpython-312.pyc
   │     │  │  │     ├─ search_scope.cpython-312.pyc
   │     │  │  │     ├─ selection_prefs.cpython-312.pyc
   │     │  │  │     ├─ target_python.cpython-312.pyc
   │     │  │  │     ├─ wheel.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ network
   │     │  │  │  ├─ auth.py
   │     │  │  │  ├─ cache.py
   │     │  │  │  ├─ download.py
   │     │  │  │  ├─ lazy_wheel.py
   │     │  │  │  ├─ session.py
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ xmlrpc.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ auth.cpython-312.pyc
   │     │  │  │     ├─ cache.cpython-312.pyc
   │     │  │  │     ├─ download.cpython-312.pyc
   │     │  │  │     ├─ lazy_wheel.cpython-312.pyc
   │     │  │  │     ├─ session.cpython-312.pyc
   │     │  │  │     ├─ utils.cpython-312.pyc
   │     │  │  │     ├─ xmlrpc.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ operations
   │     │  │  │  ├─ build
   │     │  │  │  │  ├─ build_tracker.py
   │     │  │  │  │  ├─ metadata.py
   │     │  │  │  │  ├─ metadata_editable.py
   │     │  │  │  │  ├─ metadata_legacy.py
   │     │  │  │  │  ├─ wheel.py
   │     │  │  │  │  ├─ wheel_editable.py
   │     │  │  │  │  ├─ wheel_legacy.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ build_tracker.cpython-312.pyc
   │     │  │  │  │     ├─ metadata.cpython-312.pyc
   │     │  │  │  │     ├─ metadata_editable.cpython-312.pyc
   │     │  │  │  │     ├─ metadata_legacy.cpython-312.pyc
   │     │  │  │  │     ├─ wheel.cpython-312.pyc
   │     │  │  │     ├─ wheel_editable.cpython-312.pyc
   │     │  │  │     ├─ wheel_legacy.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  │  ├─ check.py
   │     │  │  │  ├─ freeze.py
   │     │  │  │  ├─ install
   │     │  │  │  │  ├─ editable_legacy.py
   │     │  │  │  │  ├─ wheel.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ editable_legacy.cpython-312.pyc
   │     │  │  │  │     ├─ wheel.cpython-312.pyc
   │     │  │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  │  ├─ prepare.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ check.cpython-312.pyc
   │     │  │  │     ├─ freeze.cpython-312.pyc
   │     │  │  │     ├─ prepare.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ pyproject.py
   │     │  │  ├─ req
   │     │  │  │  ├─ constructors.py
   │     │  │  │  ├─ req_file.py
   │     │  │  │  ├─ req_install.py
   │     │  │  │  ├─ req_set.py
   │     │  │  │  ├─ req_uninstall.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ constructors.cpython-312.pyc
   │     │  │  │     ├─ req_file.cpython-312.pyc
   │     │  │  │     ├─ req_install.cpython-312.pyc
   │     │  │  │     ├─ req_set.cpython-312.pyc
   │     │  │  │     ├─ req_uninstall.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ resolution
   │     │  │  │  ├─ base.py
   │     │  │  │  ├─ legacy
   │     │  │  │  │  ├─ resolver.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ resolver.cpython-312.pyc
   │     │  │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  │  ├─ resolvelib
   │     │  │  │  │  ├─ base.py
   │     │  │  │  │  ├─ candidates.py
   │     │  │  │  │  ├─ factory.py
   │     │  │  │  │  ├─ found_candidates.py
   │     │  │  │  │  ├─ provider.py
   │     │  │  │  │  ├─ reporter.py
   │     │  │  │  │  ├─ requirements.py
   │     │  │  │  │  ├─ resolver.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ base.cpython-312.pyc
   │     │  │  │  │     ├─ candidates.cpython-312.pyc
   │     │  │  │  │     ├─ factory.cpython-312.pyc
   │     │  │  │  │     ├─ found_candidates.cpython-312.pyc
   │     │  │  │  │     ├─ provider.cpython-312.pyc
   │     │  │  │  │     ├─ reporter.cpython-312.pyc
   │     │  │  │  │     ├─ requirements.cpython-312.pyc
   │     │  │  │  │     ├─ resolver.cpython-312.pyc
   │     │  │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ base.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ self_outdated_check.py
   │     │  │  ├─ utils
   │     │  │  │  ├─ appdirs.py
   │     │  │  │  ├─ compat.py
   │     │  │  │  ├─ compatibility_tags.py
   │     │  │  │  ├─ datetime.py
   │     │  │  │  ├─ deprecation.py
   │     │  │  │  ├─ direct_url_helpers.py
   │     │  │  │  ├─ egg_link.py
   │     │  │  │  ├─ entrypoints.py
   │     │  │  │  ├─ filesystem.py
   │     │  │  │  ├─ filetypes.py
   │     │  │  │  ├─ glibc.py
   │     │  │  │  ├─ hashes.py
   │     │  │  │  ├─ logging.py
   │     │  │  │  ├─ misc.py
   │     │  │  │  ├─ packaging.py
   │     │  │  │  ├─ retry.py
   │     │  │  │  ├─ setuptools_build.py
   │     │  │  │  ├─ subprocess.py
   │     │  │  │  ├─ temp_dir.py
   │     │  │  │  ├─ unpacking.py
   │     │  │  │  ├─ urls.py
   │     │  │  │  ├─ virtualenv.py
   │     │  │  │  ├─ wheel.py
   │     │  │  │  ├─ _jaraco_text.py
   │     │  │  │  ├─ _log.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ appdirs.cpython-312.pyc
   │     │  │  │     ├─ compat.cpython-312.pyc
   │     │  │  │     ├─ compatibility_tags.cpython-312.pyc
   │     │  │  │     ├─ datetime.cpython-312.pyc
   │     │  │  │     ├─ deprecation.cpython-312.pyc
   │     │  │  │     ├─ direct_url_helpers.cpython-312.pyc
   │     │  │  │     ├─ egg_link.cpython-312.pyc
   │     │  │  │     ├─ entrypoints.cpython-312.pyc
   │     │  │  │     ├─ filesystem.cpython-312.pyc
   │     │  │  │     ├─ filetypes.cpython-312.pyc
   │     │  │  │     ├─ glibc.cpython-312.pyc
   │     │  │  │     ├─ hashes.cpython-312.pyc
   │     │  │  │     ├─ logging.cpython-312.pyc
   │     │  │  │     ├─ misc.cpython-312.pyc
   │     │  │  │     ├─ packaging.cpython-312.pyc
   │     │  │  │     ├─ retry.cpython-312.pyc
   │     │  │  │     ├─ setuptools_build.cpython-312.pyc
   │     │  │  │     ├─ subprocess.cpython-312.pyc
   │     │  │  │     ├─ temp_dir.cpython-312.pyc
   │     │  │  │     ├─ unpacking.cpython-312.pyc
   │     │  │  │     ├─ urls.cpython-312.pyc
   │     │  │  │     ├─ virtualenv.cpython-312.pyc
   │     │  │  │     ├─ wheel.cpython-312.pyc
   │     │  │  │     ├─ _jaraco_text.cpython-312.pyc
   │     │  │  │     ├─ _log.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ vcs
   │     │  │  │  ├─ bazaar.py
   │     │  │  │  ├─ git.py
   │     │  │  │  ├─ mercurial.py
   │     │  │  │  ├─ subversion.py
   │     │  │  │  ├─ versioncontrol.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ bazaar.cpython-312.pyc
   │     │  │  │     ├─ git.cpython-312.pyc
   │     │  │  │     ├─ mercurial.cpython-312.pyc
   │     │  │  │     ├─ subversion.cpython-312.pyc
   │     │  │  │     ├─ versioncontrol.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ wheel_builder.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ build_env.cpython-312.pyc
   │     │  │     ├─ cache.cpython-312.pyc
   │     │  │     ├─ configuration.cpython-312.pyc
   │     │  │     ├─ exceptions.cpython-312.pyc
   │     │  │     ├─ main.cpython-312.pyc
   │     │  │     ├─ pyproject.cpython-312.pyc
   │     │  │     ├─ self_outdated_check.cpython-312.pyc
   │     │  │     ├─ wheel_builder.cpython-312.pyc
   │     │  │     └─ __init__.cpython-312.pyc
   │     │  ├─ _vendor
   │     │  │  ├─ cachecontrol
   │     │  │  │  ├─ adapter.py
   │     │  │  │  ├─ cache.py
   │     │  │  │  ├─ caches
   │     │  │  │  │  ├─ file_cache.py
   │     │  │  │  │  ├─ redis_cache.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ file_cache.cpython-312.pyc
   │     │  │  │     ├─ redis_cache.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  │  ├─ controller.py
   │     │  │  │  ├─ filewrapper.py
   │     │  │  │  ├─ heuristics.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ serialize.py
   │     │  │  │  ├─ wrapper.py
   │     │  │  │  ├─ _cmd.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ adapter.cpython-312.pyc
   │     │  │  │     ├─ cache.cpython-312.pyc
   │     │  │  │     ├─ controller.cpython-312.pyc
   │     │  │  │     ├─ filewrapper.cpython-312.pyc
   │     │  │  │     ├─ heuristics.cpython-312.pyc
   │     │  │  │     ├─ serialize.cpython-312.pyc
   │     │  │  │     ├─ wrapper.cpython-312.pyc
   │     │  │  │     ├─ _cmd.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ certifi
   │     │  │  │  ├─ cacert.pem
   │     │  │  │  ├─ core.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ core.cpython-312.pyc
   │     │  │  │     ├─ __init__.cpython-312.pyc
   │     │  │  │     └─ __main__.cpython-312.pyc
   │     │  │  ├─ distlib
   │     │  │  │  ├─ compat.py
   │     │  │  │  ├─ database.py
   │     │  │  │  ├─ index.py
   │     │  │  │  ├─ locators.py
   │     │  │  │  ├─ manifest.py
   │     │  │  │  ├─ markers.py
   │     │  │  │  ├─ metadata.py
   │     │  │  │  ├─ resources.py
   │     │  │  │  ├─ scripts.py
   │     │  │  │  ├─ t32.exe
   │     │  │  │  ├─ t64-arm.exe
   │     │  │  │  ├─ t64.exe
   │     │  │  │  ├─ util.py
   │     │  │  │  ├─ version.py
   │     │  │  │  ├─ w32.exe
   │     │  │  │  ├─ w64-arm.exe
   │     │  │  │  ├─ w64.exe
   │     │  │  │  ├─ wheel.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ compat.cpython-312.pyc
   │     │  │  │     ├─ database.cpython-312.pyc
   │     │  │  │     ├─ index.cpython-312.pyc
   │     │  │  │     ├─ locators.cpython-312.pyc
   │     │  │  │     ├─ manifest.cpython-312.pyc
   │     │  │  │     ├─ markers.cpython-312.pyc
   │     │  │  │     ├─ metadata.cpython-312.pyc
   │     │  │  │     ├─ resources.cpython-312.pyc
   │     │  │  │     ├─ scripts.cpython-312.pyc
   │     │  │  │     ├─ util.cpython-312.pyc
   │     │  │  │     ├─ version.cpython-312.pyc
   │     │  │  │     ├─ wheel.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ distro
   │     │  │  │  ├─ distro.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ distro.cpython-312.pyc
   │     │  │  │     ├─ __init__.cpython-312.pyc
   │     │  │  │     └─ __main__.cpython-312.pyc
   │     │  │  ├─ idna
   │     │  │  │  ├─ codec.py
   │     │  │  │  ├─ compat.py
   │     │  │  │  ├─ core.py
   │     │  │  │  ├─ idnadata.py
   │     │  │  │  ├─ intranges.py
   │     │  │  │  ├─ package_data.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ uts46data.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ codec.cpython-312.pyc
   │     │  │  │     ├─ compat.cpython-312.pyc
   │     │  │  │     ├─ core.cpython-312.pyc
   │     │  │  │     ├─ idnadata.cpython-312.pyc
   │     │  │  │     ├─ intranges.cpython-312.pyc
   │     │  │  │     ├─ package_data.cpython-312.pyc
   │     │  │     ├─ uts46data.cpython-312.pyc
   │     │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ msgpack
   │     │  │  │  ├─ exceptions.py
   │     │  │  │  ├─ ext.py
   │     │  │  │  ├─ fallback.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ exceptions.cpython-312.pyc
   │     │  │  │     ├─ ext.cpython-312.pyc
   │     │  │  │     ├─ fallback.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ packaging
   │     │  │  │  ├─ licenses
   │     │  │  │  │  ├─ _spdx.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ _spdx.cpython-312.pyc
   │     │  │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  │  ├─ markers.py
   │     │  │  │  ├─ metadata.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ requirements.py
   │     │  │  │  ├─ specifiers.py
   │     │  │  │  ├─ tags.py
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ version.py
   │     │  │  │  ├─ _elffile.py
   │     │  │  │  ├─ _manylinux.py
   │     │  │  │  ├─ _musllinux.py
   │     │  │  │  ├─ _parser.py
   │     │  │  │  ├─ _structures.py
   │     │  │  │  ├─ _tokenizer.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ markers.cpython-312.pyc
   │     │  │  │     ├─ metadata.cpython-312.pyc
   │     │  │  │     ├─ requirements.cpython-312.pyc
   │     │  │  │     ├─ specifiers.cpython-312.pyc
   │     │  │  │     ├─ tags.cpython-312.pyc
   │     │  │  │     ├─ utils.cpython-312.pyc
   │     │  │  │     ├─ version.cpython-312.pyc
   │     │  │  │     ├─ _elffile.cpython-312.pyc
   │     │  │  │     ├─ _manylinux.cpython-312.pyc
   │     │  │  │     ├─ _musllinux.cpython-312.pyc
   │     │  │  │     ├─ _parser.cpython-312.pyc
   │     │  │  │     ├─ _structures.cpython-312.pyc
   │     │  │  │     ├─ _tokenizer.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ pkg_resources
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ platformdirs
   │     │  │  │  ├─ android.py
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ macos.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ unix.py
   │     │  │  │  ├─ version.py
   │     │  │  │  ├─ windows.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ android.cpython-312.pyc
   │     │  │  │     ├─ api.cpython-312.pyc
   │     │  │  │     ├─ macos.cpython-312.pyc
   │     │  │  │     ├─ unix.cpython-312.pyc
   │     │  │  │     ├─ version.cpython-312.pyc
   │     │  │  │     ├─ windows.cpython-312.pyc
   │     │  │  │     ├─ __init__.cpython-312.pyc
   │     │  │  │     └─ __main__.cpython-312.pyc
   │     │  │  ├─ pygments
   │     │  │  │  ├─ cmdline.py
   │     │  │  │  ├─ console.py
   │     │  │  │  ├─ filter.py
   │     │  │  │  ├─ filters
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  │  ├─ formatter.py
   │     │  │  │  ├─ formatters
   │     │  │  │  │  ├─ bbcode.py
   │     │  │  │  │  ├─ groff.py
   │     │  │  │  │  ├─ html.py
   │     │  │  │  │  ├─ img.py
   │     │  │  │  │  ├─ irc.py
   │     │  │  │  │  ├─ latex.py
   │     │  │  │  │  ├─ other.py
   │     │  │  │  │  ├─ pangomarkup.py
   │     │  │  │  │  ├─ rtf.py
   │     │  │  │  │  ├─ svg.py
   │     │  │  │  │  ├─ terminal.py
   │     │  │  │  │  ├─ terminal256.py
   │     │  │  │  │  ├─ _mapping.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ bbcode.cpython-312.pyc
   │     │  │  │  │     ├─ groff.cpython-312.pyc
   │     │  │  │  │     ├─ html.cpython-312.pyc
   │     │  │  │  │     ├─ img.cpython-312.pyc
   │     │  │  │  │     ├─ irc.cpython-312.pyc
   │     │  │  │  │     ├─ latex.cpython-312.pyc
   │     │  │  │  │     ├─ other.cpython-312.pyc
   │     │  │  │  │     ├─ pangomarkup.cpython-312.pyc
   │     │  │  │  │     ├─ rtf.cpython-312.pyc
   │     │  │  │  │     ├─ svg.cpython-312.pyc
   │     │  │  │  │     ├─ terminal.cpython-312.pyc
   │     │  │  │  │     ├─ terminal256.cpython-312.pyc
   │     │  │  │  │     ├─ _mapping.cpython-312.pyc
   │     │  │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  │  ├─ lexer.py
   │     │  │  │  ├─ lexers
   │     │  │  │  │  ├─ python.py
   │     │  │  │  │  ├─ _mapping.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ python.cpython-312.pyc
   │     │  │  │  │     ├─ _mapping.cpython-312.pyc
   │     │  │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  │  ├─ modeline.py
   │     │  │  │  ├─ plugin.py
   │     │  │  │  ├─ regexopt.py
   │     │  │  │  ├─ scanner.py
   │     │  │  │  ├─ sphinxext.py
   │     │  │  │  ├─ style.py
   │     │  │  │  ├─ styles
   │     │  │  │  │  ├─ _mapping.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ _mapping.cpython-312.pyc
   │     │  │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  │  ├─ token.py
   │     │  │  │  ├─ unistring.py
   │     │  │  │  ├─ util.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ cmdline.cpython-312.pyc
   │     │  │  │     ├─ console.cpython-312.pyc
   │     │  │  │     ├─ filter.cpython-312.pyc
   │     │  │  │     ├─ formatter.cpython-312.pyc
   │     │  │  │     ├─ lexer.cpython-312.pyc
   │     │  │  │     ├─ modeline.cpython-312.pyc
   │     │  │  │     ├─ plugin.cpython-312.pyc
   │     │  │  │     ├─ regexopt.cpython-312.pyc
   │     │  │  │     ├─ scanner.cpython-312.pyc
   │     │  │  │     ├─ sphinxext.cpython-312.pyc
   │     │  │  │     ├─ style.cpython-312.pyc
   │     │  │  │     ├─ token.cpython-312.pyc
   │     │  │  │     ├─ unistring.cpython-312.pyc
   │     │  │  │     ├─ util.cpython-312.pyc
   │     │  │  │     ├─ __init__.cpython-312.pyc
   │     │  │  │     └─ __main__.cpython-312.pyc
   │     │  │  ├─ pyproject_hooks
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ _impl.py
   │     │  │  │  ├─ _in_process
   │     │  │  │  │  ├─ _in_process.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ _in_process.cpython-312.pyc
   │     │  │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _impl.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ requests
   │     │  │  │  ├─ adapters.py
   │     │  │  │  ├─ api.py
   │     │  │  │  ├─ auth.py
   │     │  │  │  ├─ certs.py
   │     │  │  │  ├─ compat.py
   │     │  │  │  ├─ cookies.py
   │     │  │  │  ├─ exceptions.py
   │     │  │  │  ├─ help.py
   │     │  │  │  ├─ hooks.py
   │     │  │  │  ├─ models.py
   │     │  │  │  ├─ packages.py
   │     │  │  │  ├─ sessions.py
   │     │  │  │  ├─ status_codes.py
   │     │  │  │  ├─ structures.py
   │     │  │  │  ├─ utils.py
   │     │  │  │  ├─ _internal_utils.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __pycache__
   │     │  │  │  │  ├─ adapters.cpython-312.pyc
   │     │  │  │  │  ├─ api.cpython-312.pyc
   │     │  │  │  │  ├─ auth.cpython-312.pyc
   │     │  │  │  │  ├─ certs.cpython-312.pyc
   │     │  │  │  │  ├─ compat.cpython-312.pyc
   │     │  │  │  │  ├─ cookies.cpython-312.pyc
   │     │  │  │  │  ├─ exceptions.cpython-312.pyc
   │     │  │  │  │  ├─ help.cpython-312.pyc
   │     │  │  │  │  ├─ hooks.cpython-312.pyc
   │     │  │  │  │  ├─ models.cpython-312.pyc
   │     │  │  │  │  ├─ packages.cpython-312.pyc
   │     │  │  │  │  ├─ sessions.cpython-312.pyc
   │     │  │  │  │  ├─ status_codes.cpython-312.pyc
   │     │  │  │  │  ├─ structures.cpython-312.pyc
   │     │  │  │  │  ├─ utils.cpython-312.pyc
   │     │  │  │  │  ├─ _internal_utils.cpython-312.pyc
   │     │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │  │  │  │  └─ __version__.cpython-312.pyc
   │     │  │  │  └─ __version__.py
   │     │  │  ├─ resolvelib
   │     │  │  │  ├─ compat
   │     │  │  │  │  ├─ collections_abc.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ collections_abc.cpython-312.pyc
   │     │  │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  │  ├─ providers.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ reporters.py
   │     │  │  │  ├─ resolvers.py
   │     │  │  │  ├─ structs.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ providers.cpython-312.pyc
   │     │  │  │     ├─ reporters.cpython-312.pyc
   │     │  │  │     ├─ resolvers.cpython-312.pyc
   │     │  │  │     ├─ structs.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ rich
   │     │  │  │  ├─ abc.py
   │     │  │  │  ├─ align.py
   │     │  │  │  ├─ ansi.py
   │     │  │  │  ├─ bar.py
   │     │  │  │  ├─ box.py
   │     │  │  │  ├─ cells.py
   │     │  │  │  ├─ color.py
   │     │  │  │  ├─ color_triplet.py
   │     │  │  │  ├─ columns.py
   │     │  │  │  ├─ console.py
   │     │  │  │  ├─ constrain.py
   │     │  │  │  ├─ containers.py
   │     │  │  │  ├─ control.py
   │     │  │  │  ├─ default_styles.py
   │     │  │  │  ├─ diagnose.py
   │     │  │  │  ├─ emoji.py
   │     │  │  │  ├─ errors.py
   │     │  │  │  ├─ filesize.py
   │     │  │  │  ├─ file_proxy.py
   │     │  │  │  ├─ highlighter.py
   │     │  │  │  ├─ json.py
   │     │  │  │  ├─ jupyter.py
   │     │  │  │  ├─ layout.py
   │     │  │  │  ├─ live.py
   │     │  │  │  ├─ live_render.py
   │     │  │  │  ├─ logging.py
   │     │  │  │  ├─ markup.py
   │     │  │  │  ├─ measure.py
   │     │  │  │  ├─ padding.py
   │     │  │  │  ├─ pager.py
   │     │  │  │  ├─ palette.py
   │     │  │  │  ├─ panel.py
   │     │  │  │  ├─ pretty.py
   │     │  │  │  ├─ progress.py
   │     │  │  │  ├─ progress_bar.py
   │     │  │  │  ├─ prompt.py
   │     │  │  │  ├─ protocol.py
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ region.py
   │     │  │  │  ├─ repr.py
   │     │  │  │  ├─ rule.py
   │     │  │  │  ├─ scope.py
   │     │  │  │  ├─ screen.py
   │     │  │  │  ├─ segment.py
   │     │  │  │  ├─ spinner.py
   │     │  │  │  ├─ status.py
   │     │  │  │  ├─ style.py
   │     │  │  │  ├─ styled.py
   │     │  │  │  ├─ syntax.py
   │     │  │  │  ├─ table.py
   │     │  │  │  ├─ terminal_theme.py
   │     │  │  │  ├─ text.py
   │     │  │  │  ├─ theme.py
   │     │  │  │  ├─ themes.py
   │     │  │  │  ├─ traceback.py
   │     │  │  │  ├─ tree.py
   │     │  │  │  ├─ _cell_widths.py
   │     │  │  │  ├─ _emoji_codes.py
   │     │  │  │  ├─ _emoji_replace.py
   │     │  │  │  ├─ _export_format.py
   │     │  │  │  ├─ _extension.py
   │     │  │  │  ├─ _fileno.py
   │     │  │  │  ├─ _inspect.py
   │     │  │  │  ├─ _log_render.py
   │     │  │  │  ├─ _loop.py
   │     │  │  │  ├─ _null_file.py
   │     │  │  │  ├─ _palettes.py
   │     │  │  │  ├─ _pick.py
   │     │  │  │  ├─ _ratio.py
   │     │  │  │  ├─ _spinners.py
   │     │  │  │  ├─ _stack.py
   │     │  │  │  ├─ _timer.py
   │     │  │  │  ├─ _win32_console.py
   │     │  │  │  ├─ _windows.py
   │     │  │  │  ├─ _windows_renderer.py
   │     │  │  │  ├─ _wrap.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  ├─ __main__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ abc.cpython-312.pyc
   │     │  │  │     ├─ align.cpython-312.pyc
   │     │  │  │     ├─ ansi.cpython-312.pyc
   │     │  │  │     ├─ bar.cpython-312.pyc
   │     │  │  │     ├─ box.cpython-312.pyc
   │     │  │  │     ├─ cells.cpython-312.pyc
   │     │  │  │     ├─ color.cpython-312.pyc
   │     │  │  │     ├─ color_triplet.cpython-312.pyc
   │     │  │  │     ├─ columns.cpython-312.pyc
   │     │  │  │     ├─ console.cpython-312.pyc
   │     │  │  │     ├─ constrain.cpython-312.pyc
   │     │  │  │     ├�� containers.cpython-312.pyc
   │     │  │  │     ├─ control.cpython-312.pyc
   │     │  │  │     ├─ default_styles.cpython-312.pyc
   │     │  │  │     ├─ diagnose.cpython-312.pyc
   │     │  │  │     ├─ emoji.cpython-312.pyc
   │     │  │  │     ├─ errors.cpython-312.pyc
   │     │  │  │     ├─ filesize.cpython-312.pyc
   │     │  │  │     ├─ file_proxy.cpython-312.pyc
   │     │  │  │     ├─ highlighter.cpython-312.pyc
   │     │  │  │     ├─ json.cpython-312.pyc
   │     │  │  │     ├─ jupyter.cpython-312.pyc
   │     │  │  │     ├─ layout.cpython-312.pyc
   │     │  │  │     ├─ live.cpython-312.pyc
   │     │  │  │     ├─ live_render.cpython-312.pyc
   │     │  │  │     ├─ logging.cpython-312.pyc
   │     │  │  │     ├─ markup.cpython-312.pyc
   │     │  │  │     ├─ measure.cpython-312.pyc
   │     │  │  │     ├─ padding.cpython-312.pyc
   │     │  │  │     ├─ pager.cpython-312.pyc
   │     │  │  │     ├─ palette.cpython-312.pyc
   │     │  │  │     ├─ panel.cpython-312.pyc
   │     │  │  │     ├─ pretty.cpython-312.pyc
   │     │  │  │     ├─ progress.cpython-312.pyc
   │     │  │  │     ├─ progress_bar.cpython-312.pyc
   │     │  │  │     ├─ prompt.cpython-312.pyc
   │     │  │  │     ├─ protocol.cpython-312.pyc
   │     │  │  │     ├─ region.cpython-312.pyc
   │     │  │  │     ├─ repr.cpython-312.pyc
   │     │  │  │     ├─ rule.cpython-312.pyc
   │     │  │  │     ├─ scope.cpython-312.pyc
   │     │  │  │     ├─ screen.cpython-312.pyc
   │     │  │  │     ├─ segment.cpython-312.pyc
   │     │  │  │     ├─ spinner.cpython-312.pyc
   │     │  │  │     ├─ status.cpython-312.pyc
   │     │  │  │     ├─ style.cpython-312.pyc
   │     │  │  │     ├─ styled.cpython-312.pyc
   │     │  │  │     ├─ syntax.cpython-312.pyc
   │     │  │  │     ├─ table.cpython-312.pyc
   │     │  │  │     ├─ terminal_theme.cpython-312.pyc
   │     │  │  │     ├─ text.cpython-312.pyc
   │     │  │  │     ├─ theme.cpython-312.pyc
   │     │  │  │     ├─ themes.cpython-312.pyc
   │     │  │  │     ├─ traceback.cpython-312.pyc
   │     │  │  │     ├─ tree.cpython-312.pyc
   │     │  │  │     ├─ _cell_widths.cpython-312.pyc
   │     │  │  │     ├─ _emoji_codes.cpython-312.pyc
   │     │  │  │     ├─ _emoji_replace.cpython-312.pyc
   │     │  │  │     ├─ _export_format.cpython-312.pyc
   │     │  │  │     ├─ _extension.cpython-312.pyc
   │     │  │  │     ├─ _fileno.cpython-312.pyc
   │     │  │  │     ├─ _inspect.cpython-312.pyc
   │     │  │  │     ├─ _log_render.cpython-312.pyc
   │     │  │  │     ├─ _loop.cpython-312.pyc
   │     │  │  │     ├─ _null_file.cpython-312.pyc
   │     │  │  │     ├─ _palettes.cpython-312.pyc
   │     │  │  │     ├─ _pick.cpython-312.pyc
   │     │  │  │     ├─ _ratio.cpython-312.pyc
   │     │  │  │     ├─ _spinners.cpython-312.pyc
   │     │  │  │     ├─ _stack.cpython-312.pyc
   │     │  │  │     ├─ _timer.cpython-312.pyc
   │     │  │  │     ├─ _win32_console.cpython-312.pyc
   │     │  │  │     ├─ _windows.cpython-312.pyc
   │     │  │  │     ├─ _windows_renderer.cpython-312.pyc
   │     │  │  │     ├─ _wrap.cpython-312.pyc
   │     │  │  │     ├─ __init__.cpython-312.pyc
   │     │  │  │     └─ __main__.cpython-312.pyc
   │     │  │  ├─ tomli
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ _parser.py
   │     │  │  │  ├─ _re.py
   │     │  │  │  ├─ _types.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _parser.cpython-312.pyc
   │     │  │  │     ├─ _re.cpython-312.pyc
   │     │  │  │     ├─ _types.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ truststore
   │     │  │  │  ├─ py.typed
   │     │  │  │  ├─ _api.py
   │     │  │  │  ├─ _macos.py
   │     │  │  │  ├─ _openssl.py
   │     │  │  │  ├─ _ssl_constants.py
   │     │  │  │  ├─ _windows.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ _api.cpython-312.pyc
   │     │  │  │     ├─ _macos.cpython-312.pyc
   │     │  │  │     ├─ _openssl.cpython-312.pyc
   │     │  │  │     ├─ _ssl_constants.cpython-312.pyc
   │     │  │  │     ├─ _windows.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ typing_extensions.py
   │     │  │  ├─ urllib3
   │     │  │  │  ├─ connection.py
   │     │  │  │  ├─ connectionpool.py
   │     │  │  │  ├─ contrib
   │     │  │  │  │  ├─ appengine.py
   │     │  │  │  │  ├─ ntlmpool.py
   │     │  │  │  │  ├─ pyopenssl.py
   │     │  │  │  │  ├─ securetransport.py
   │     │  │  │  │  ├─ socks.py
   │     │  │  │  │  ├─ _appengine_environ.py
   │     │  │  │  │  ├─ _securetransport
   │     │  │  │  │  │  ├─ bindings.py
   │     │  │  │  │  │  ├─ low_level.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ bindings.cpython-312.pyc
   │     │  │  │  │  │     ├─ low_level.cpython-312.pyc
   │     │  │  │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ appengine.cpython-312.pyc
   │     │  │  │  │     ├─ ntlmpool.cpython-312.pyc
   │     │  │  │  │     ├─ pyopenssl.cpython-312.pyc
   │     │  │  │  │     ├─ securetransport.cpython-312.pyc
   │     │  │  │  │     ├─ socks.cpython-312.pyc
   │     │  │  │  │     ├─ _appengine_environ.cpython-312.pyc
   │     │  │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  │  ├─ exceptions.py
   │     │  │  │  ├─ fields.py
   │     │  │  │  ├─ filepost.py
   │     │  │  │  ├─ packages
   │     │  │  │  │  ├─ backports
   │     │  │  │  │  │  ├─ makefile.py
   │     │  │  │  │  │  ├─ weakref_finalize.py
   │     │  │  │  │  │  ├─ __init__.py
   │     │  │  │  │  │  └─ __pycache__
   │     │  │  │  │  │     ├─ makefile.cpython-312.pyc
   │     │  │  │  │  │     ├─ weakref_finalize.cpython-312.pyc
   │     │  │  │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  │  │  ├─ six.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ six.cpython-312.pyc
   │     │  │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  │  ├─ poolmanager.py
   │     │  │  │  ├─ request.py
   │     │  │  │  ├─ response.py
   │     │  │  │  ├─ util
   │     │  │  │  │  ├─ connection.py
   │     │  │  │  │  ├─ proxy.py
   │     │  │  │  │  ├─ queue.py
   │     │  │  │  │  ├─ request.py
   │     │  │  │  │  ├─ response.py
   │     │  │  │  │  ├─ retry.py
   │     │  │  │  │  ├─ ssltransport.py
   │     │  │  │  │  ├─ ssl_.py
   │     │  │  │  │  ├─ ssl_match_hostname.py
   │     │  │  │  │  ├─ timeout.py
   │     │  │  │  │  ├─ url.py
   │     │  │  │  │  ├─ wait.py
   │     │  │  │  │  ├─ __init__.py
   │     │  │  │  │  └─ __pycache__
   │     │  │  │  │     ├─ connection.cpython-312.pyc
   │     │  │  │  │     ├─ proxy.cpython-312.pyc
   │     │  │  │  │     ├─ queue.cpython-312.pyc
   │     │  │  │  │     ├─ request.cpython-312.pyc
   │     │  │  │  │     ├─ response.cpython-312.pyc
   │     │  │  │  │     ├─ retry.cpython-312.pyc
   │     │  │  │  │     ├─ ssltransport.cpython-312.pyc
   │     │  │  │  │     ├─ ssl_.cpython-312.pyc
   │     │  │  │  │     ├─ ssl_match_hostname.cpython-312.pyc
   │     │  │  │  │     ├─ timeout.cpython-312.pyc
   │     │  │  │  │     ├─ url.cpython-312.pyc
   │     │  │  │  │     ├─ wait.cpython-312.pyc
   │     │  │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  │  ├─ _collections.py
   │     │  │  │  ├─ _version.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ connection.cpython-312.pyc
   │     │  │  │     ├─ connectionpool.cpython-312.pyc
   │     │  │  │     ├─ exceptions.cpython-312.pyc
   │     │  │  │     ├─ fields.cpython-312.pyc
   │     │  │  │     ├─ filepost.cpython-312.pyc
   │     │  │  │     ├─ poolmanager.cpython-312.pyc
   │     │  │  │     ├─ request.cpython-312.pyc
   │     │  │  │     ├─ response.cpython-312.pyc
   │     │  │  │     ├─ _collections.cpython-312.pyc
   │     │  │  │     ├─ _version.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ vendor.txt
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ typing_extensions.cpython-312.pyc
   │     │  │     └─ __init__.cpython-312.pyc
   │     │  ├─ __init__.py
   │     │  ├─ __main__.py
   │     │  ├─ __pip-runner__.py
   │     │  └─ __pycache__
   │     │     ├─ __init__.cpython-312.pyc
   │     │     ├─ __main__.cpython-312.pyc
   │     │     └─ __pip-runner__.cpython-312.pyc
   │     ├─ pip-25.0.1.dist-info
   │     │  ├─ AUTHORS.txt
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ python_dotenv-1.0.1.dist-info
   │     │  ├─ entry_points.txt
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ requests
   │     │  ├─ adapters.py
   │     │  ├─ api.py
   │     │  ├─ auth.py
   │     │  ├─ certs.py
   │     │  ├─ compat.py
   │     │  ├─ cookies.py
   │     │  ├─ exceptions.py
   │     │  ├─ help.py
   │     │  ├─ hooks.py
   │     │  ├─ models.py
   │     │  ├─ packages.py
   │     │  ├─ sessions.py
   │     │  ├─ status_codes.py
   │     │  ├─ structures.py
   │     │  ├─ utils.py
   │     │  ├─ _internal_utils.py
   │     │  ├─ __init__.py
   │     │  ├─ __pycache__
   │     │  │  ├─ adapters.cpython-312.pyc
   │     │  │  ├─ api.cpython-312.pyc
   │     │  │  ├─ auth.cpython-312.pyc
   │     │  │  ├─ certs.cpython-312.pyc
   │     │  │  ├─ compat.cpython-312.pyc
   │     │  │  ├─ cookies.cpython-312.pyc
   │     │  │  ├─ exceptions.cpython-312.pyc
   │     │  │  ├─ help.cpython-312.pyc
   │     │  │  ├─ hooks.cpython-312.pyc
   │     │  │  ├─ models.cpython-312.pyc
   │     │  │  ├─ packages.cpython-312.pyc
   │     │  │  ├─ sessions.cpython-312.pyc
   │     │  │  ├─ status_codes.cpython-312.pyc
   │     │  │  ├─ structures.cpython-312.pyc
   │     │  │  ├─ utils.cpython-312.pyc
   │     │  │  ├─ _internal_utils.cpython-312.pyc
   │     │  │  ├─ __init__.cpython-312.pyc
   │     │  │  └─ __version__.cpython-312.pyc
   │     │  └─ __version__.py
   │     ├─ requests-2.32.3.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ LICENSE
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  ├─ REQUESTED
   │     │  ├─ top_level.txt
   │     │  └─ WHEEL
   │     ├─ urllib3
   │     │  ├─ connection.py
   │     │  ├─ connectionpool.py
   │     │  ├─ contrib
   │     │  │  ├─ emscripten
   │     │  │  │  ├─ connection.py
   │     │  │  │  ├─ emscripten_fetch_worker.js
   │     │  │  │  ├─ fetch.py
   │     │  │  │  ├─ request.py
   │     │  │  │  ├─ response.py
   │     │  │  │  ├─ __init__.py
   │     │  │  │  └─ __pycache__
   │     │  │  │     ├─ connection.cpython-312.pyc
   │     │  │  │     ├─ fetch.cpython-312.pyc
   │     │  │  │     ├─ request.cpython-312.pyc
   │     │  │  │     ├─ response.cpython-312.pyc
   │     │  │  │     └─ __init__.cpython-312.pyc
   │     │  │  ├─ pyopenssl.py
   │     │  │  ├─ socks.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ pyopenssl.cpython-312.pyc
   │     │  │     ├─ socks.cpython-312.pyc
   │     │  │     └─ __init__.cpython-312.pyc
   │     │  ├─ exceptions.py
   │     │  ├─ fields.py
   │     │  ├─ filepost.py
   │     │  ├─ http2
   │     │  │  ├─ connection.py
   │     │  │  ├─ probe.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ connection.cpython-312.pyc
   │     │  │     ├─ probe.cpython-312.pyc
   │     │  │     └─ __init__.cpython-312.pyc
   │     │  ├─ poolmanager.py
   │     │  ├─ py.typed
   │     │  ├─ response.py
   │     │  ├─ util
   │     │  │  ├─ connection.py
   │     │  │  ├─ proxy.py
   │     │  │  ├─ request.py
   │     │  │  ├─ response.py
   │     │  │  ├─ retry.py
   │     │  │  ├─ ssltransport.py
   │     │  │  ├─ ssl_.py
   │     │  │  ├─ ssl_match_hostname.py
   │     │  │  ├─ timeout.py
   │     │  │  ├─ url.py
   │     │  │  ├─ util.py
   │     │  │  ├─ wait.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ connection.cpython-312.pyc
   │     │  │     ├─ proxy.cpython-312.pyc
   │     │  │     ├─ request.cpython-312.pyc
   │     │  │     ├─ response.cpython-312.pyc
   │     │  │     ├─ retry.cpython-312.pyc
   │     │  │     ├─ ssltransport.cpython-312.pyc
   │     │  │     ├─ ssl_.cpython-312.pyc
   │     │  │     ├─ ssl_match_hostname.cpython-312.pyc
   │     │  │     ├─ timeout.cpython-312.pyc
   │     │  │     ├─ url.cpython-312.pyc
   │     │  │     ├─ util.cpython-312.pyc
   │     │  │     ├─ wait.cpython-312.pyc
   │     │  │     └─ __init__.cpython-312.pyc
   │     │  ├─ _base_connection.py
   │     │  ├─ _collections.py
   │     │  ├─ _request_methods.py
   │     │  ├─ _version.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ connection.cpython-312.pyc
   │     │     ├─ connectionpool.cpython-312.pyc
   │     │     ├─ exceptions.cpython-312.pyc
   │     │     ├─ fields.cpython-312.pyc
   │     │     ├─ filepost.cpython-312.pyc
   │     │     ├─ poolmanager.cpython-312.pyc
   │     │     ├─ response.cpython-312.pyc
   │     │     ├─ _base_connection.cpython-312.pyc
   │     │     ├─ _collections.cpython-312.pyc
   │     │     ├─ _request_methods.cpython-312.pyc
   │     │     ├─ _version.cpython-312.pyc
   │     │     └─ __init__.cpython-312.pyc
   │     ├─ urllib3-2.3.0.dist-info
   │     │  ├─ INSTALLER
   │     │  ├─ licenses
   │     │  │  └─ LICENSE.txt
   │     │  ├─ METADATA
   │     │  ├─ RECORD
   │     │  └─ WHEEL
   │     ├─ werkzeug
   │     │  ├─ datastructures
   │     │  │  ├─ accept.py
   │     │  │  ├─ auth.py
   │     │  │  ├─ cache_control.py
   │     │  │  ├─ csp.py
   │     │  │  ├─ etag.py
   │     │  │  ├─ file_storage.py
   │     │  │  ├─ headers.py
   │     │  │  ├─ mixins.py
   │     │  │  ├─ range.py
   │     │  │  ├─ structures.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ accept.cpython-312.pyc
   │     │  │     ├─ auth.cpython-312.pyc
   │     │  │     ├─ cache_control.cpython-312.pyc
   │     │  │     ├─ csp.cpython-312.pyc
   │     │  │     ├─ etag.cpython-312.pyc
   │     │  │     ├─ file_storage.cpython-312.pyc
   │     │  │     ├─ headers.cpython-312.pyc
   │     │  │     ├─ mixins.cpython-312.pyc
   │     │  │     ├─ range.cpython-312.pyc
   │     │  │     ├─ structures.cpython-312.pyc
   │     │  │     └─ __init__.cpython-312.pyc
   │     │  ├─ debug
   │     │  │  ├─ console.py
   │     │  │  ├─ repr.py
   │     │  │  ├─ shared
   │     │  │  │  ├─ console.png
   │     │  │  │  ├─ debugger.js
   │     │  │  │  ├─ ICON_LICENSE.md
   │     │  │  │  ├─ less.png
   │     │  │  │  ├─ more.png
   │     │  │  │  └─ style.css
   │     │  │  ├─ tbtools.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ console.cpython-312.pyc
   │     │  │     ├─ repr.cpython-312.pyc
   │     │  │     ├─ tbtools.cpython-312.pyc
   │     │  │     └─ __init__.cpython-312.pyc
   │     │  ├─ exceptions.py
   │     │  ├─ formparser.py
   │     │  ├─ http.py
   │     │  ├─ local.py
   │     │  ├─ middleware
   │     │  │  ├─ dispatcher.py
   │     │  │  ├─ http_proxy.py
   │     │  │  ├─ lint.py
   │     │  │  ├─ profiler.py
   │     │  │  ├─ proxy_fix.py
   │     │  │  ├─ shared_data.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ dispatcher.cpython-312.pyc
   │     │  │     ├─ http_proxy.cpython-312.pyc
   │     │  │     ├─ lint.cpython-312.pyc
   │     │  │     ├─ profiler.cpython-312.pyc
   │     │  │     ├─ proxy_fix.cpython-312.pyc
   │     │  │     ├─ shared_data.cpython-312.pyc
   │     │  │     └─ __init__.cpython-312.pyc
   │     │  ├─ py.typed
   │     │  ├─ routing
   │     │  │  ├─ converters.py
   │     │  │  ├─ exceptions.py
   │     │  │  ├─ map.py
   │     │  │  ├─ matcher.py
   │     │  │  ├─ rules.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ converters.cpython-312.pyc
   │     │  │     ├─ exceptions.cpython-312.pyc
   │     │  │     ├─ map.cpython-312.pyc
   │     │  │     ├─ matcher.cpython-312.pyc
   │     │  │     ├─ rules.cpython-312.pyc
   │     │  │     └─ __init__.cpython-312.pyc
   │     │  ├─ sansio
   │     │  │  ├─ http.py
   │     │  │  ├─ multipart.py
   │     │  │  ├─ request.py
   │     │  │  ├─ response.py
   │     │  │  ├─ utils.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ http.cpython-312.pyc
   │     │  │     ├─ multipart.cpython-312.pyc
   │     │  │     ├─ request.cpython-312.pyc
   │     │  │     ├─ response.cpython-312.pyc
   │     │  │     ├─ utils.cpython-312.pyc
   │     │  │     └─ __init__.cpython-312.pyc
   │     │  ├─ security.py
   │     │  ├─ serving.py
   │     │  ├─ test.py
   │     │  ├─ testapp.py
   │     │  ├─ urls.py
   │     │  ├─ user_agent.py
   │     │  ├─ utils.py
   │     │  ├─ wrappers
   │     │  │  ├─ request.py
   │     │  │  ├─ response.py
   │     │  │  ├─ __init__.py
   │     │  │  └─ __pycache__
   │     │  │     ├─ request.cpython-312.pyc
   │     │  │     ├─ response.cpython-312.pyc
   │     │  │     └─ __init__.cpython-312.pyc
   │     │  ├─ wsgi.py
   │     │  ├─ _internal.py
   │     │  ├─ _reloader.py
   │     │  ├─ __init__.py
   │     │  └─ __pycache__
   │     │     ├─ exceptions.cpython-312.pyc
   │     │     ├─ formparser.cpython-312.pyc
   │     │     ├─ http.cpython-312.pyc
   │     │     ├─ local.cpython-312.pyc
   │     │     ├─ security.cpython-312.pyc
   │     │     ├─ serving.cpython-312.pyc
   │     │     ├─ test.cpython-312.pyc
   │     │     ├─ testapp.cpython-312.pyc
   │     │     ├─ urls.cpython-312.pyc
   │     │     ├─ user_agent.cpython-312.pyc
   │     │     ├─ utils.cpython-312.pyc
   │     │     ├─ wsgi.cpython-312.pyc
   │     │     ├─ _internal.cpython-312.pyc
   │     │     ├─ _reloader.cpython-312.pyc
   │     │     └─ __init__.cpython-312.pyc
   │     └─ werkzeug-3.1.3.dist-info
   │        ├─ INSTALLER
   │        ├─ LICENSE.txt
   │        ├─ METADATA
   │        ├─ RECORD
   │        └─ WHEEL
   ├─ pyvenv.cfg
   └─ Scripts
      ├─ activate
      ├─ activate.bat
      ├─ Activate.ps1
      ├─ deactivate.bat
      ├─ dotenv.exe
      ├─ flask.exe
      ├─ normalizer.exe
      ├─ pip.exe
      ├─ pip3.12.exe
      ├─ pip3.exe
      ├─ python.exe
      └─ pythonw.exe

```

## Setup Instructions

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ibtisamafzal/IBM-Market-Analyzer.git
   cd IBM-Market-Analyzer/backend
   ```

2. **Create a virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**:
   Create a `.env` file in the `backend` directory and add the following:
   ```env
   BING_API_KEY=your_bing_api_key
   IBM_CLOUD_KEY=your_ibm_watson_api_key
   ```

5. **Run the backend server**:
   ```bash
   python run.py
   ```

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the frontend server**:
   ```bash
   npm start
   ```

## API Keys

### Bing News Search API Key

1. Go to the [Bing News Search API](https://www.microsoft.com/en-us/bing/apis/bing-news-search-api-v7) page.
2. Sign in or create an account.
3. Subscribe to the API to get your API key.
4. Add the API key to your `.env` file as `BING_API_KEY`.

### IBM Watson API Key

1. Go to the [IBM Cloud](https://cloud.ibm.com/) page.
2. Sign in or create an account.
3. Navigate to the IBM Watson services and create an instance.
4. Obtain the API key from the service credentials.
5. Add the API key to your `.env` file as `IBM_CLOUD_KEY`.

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the search bar to enter keywords and get real-time market insights and sentiment analysis.

