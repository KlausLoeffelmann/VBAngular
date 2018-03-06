t
# VBAngular
Let's try to create an Angular frontend with an ASP.NET Core/EF Core Backend...in Visual Basic!

## Prerequisites before getting the project from GitHub
* Make sure you have .NET 4.7 installed. You will need .NET 4.7, because the solution need to reference a .NET STandard 2.0 DLL from a Windows Forms project, and this is only possible with .NET 4.7. To install or check for .NET 4.7, use the Visual Studio Installer.

* Check, if you have installed (or installed the latest version) of npm:

```
C:\Users\klauslo>npm --version
5.6.0
```
* If not, install the LTS version from https://nodejs.org/en/download/ - choose the 32-Bit-Version.
* After that, install the Angular-CLI with

```
npm install -g @angular/cli
```

## Cloning this Repo GitHub
You can either use the Team Explorer in Visual Studio to clone this repository, or you use the Visual Studio Developer Command Prompt.
* Open the Command Prompt.
* Navigate to the base folder where you store your GitHub projects - e.g. `GitHubDev`
* Type `git clone https://github.com/KlausLoeffelmann/VBAngular`. This created the subfolder 'VbAngular' and clones the repo into that folder.

## Prerequisites after getting the project from GitHub
* Change into the project directory, and further to the project subfolder `RoamingClipboardApi`.
* Enter the following line to restore the npm modules into the node_modules folder.
```
D:\GitHubDev\VbAngular\src\RoamingClipBoardApi>npm install
```

* Use `ng build` to let WebPack build the TypeScript libs (and also later the project's TypeScript code) into a package bundle.
```
D:\GitHubDev\VbAngular\src\RoamingClipBoardApi>ng build
Date: 2018-02-12T15:16:38.258Z
Hash: 366b298126bdda8bb2dc
Time: 4630ms
chunk {inline} inline.bundle.js, inline.bundle.js.map (inline) 5.83 kB [entry] [rendered]
chunk {main} main.bundle.js, main.bundle.js.map (main) 7.26 kB [initial] [rendered]
chunk {polyfills} polyfills.bundle.js, polyfills.bundle.js.map (polyfills) 201 kB [initial] [rendered]
chunk {styles} styles.bundle.js, styles.bundle.js.map (styles) 11.4 kB [initial] [rendered]
chunk {vendor} vendor.bundle.js, vendor.bundle.js.map (vendor) 2.43 MB [initial] [rendered]
```

TIPP: Later, when you continue developing this app, use `ng build --watch` to set up an continuing process which does that: Whenever a file from the frontend (Angular) project changes, the build process automatically restarts. This way, you can develop the frontend and test it out without any noticeable delay.

## Setting up the SQL-Database through Entity Framework Core Data Migrations

For this WebAPI project we use a SQL-Server Local DB installation to store the data. If SQL-Server LocalDB is not available on your system, you can easily install it using the Visual Studio Installer. To access the SQL Server, we do not use the classic Entity Framework 6.x, but rather the current Entity Framework Core, and yes, that _is_ possible with Visual Basic. Unlike the classic Entity Framework, Entity Framework Core uses only the so-called Code First method to maintain database definitions, modifications and updates. In contrast to classic Entity Framework, which in fact allowed the code first approach, but which was not used that often in practice. Code First, unlike Model First, does not use a Database as a template to generate the corresponding model classes in the Visual Basic backend project. Rather, the definition of model classes in the Visual Basic project serves as a template for generating or later updating the database schema. And this approach has several advantages: On the one hand, the changes to the database schema resulting from the code are implicitly hold under the same Source Code Management the whole project is - there is no difference in fact. In addition, we use tools to create additional migrations if necessary, which result from changes or modifications of the model classes. With these migrations, which are basically nothing more than T-SQL-Scripts which get executed by .NET Code, the databases on the target systems can be set up initially and, if the requirement comes up later, also updated, should additional tables or fields be needed. Said all that, there is a small disadvantage for using EF Core in Visual Basic: The migration code generated by the EF toolset can currently only spill out C# code. However, this is not that tragic, because we can avoid this problem with a little trick: We define our model in a dedicated Visual Basic DLL project. The migration logic however, which could basically also be hosted here, we move to another - a C# - project, and within this C# project we simply refer to our actual database definition written in Visual Basic, which results from the VB model classes. When creating the migration code, the Entity Framework sees our VB code as CSharp, and generates the migration code accordingly. Since we never edit this automatically generated C# code directly, but only use it to create or update the database from the Visual Studio Package Console (also possible: by calling the migration routines from the application at runtime), it does not really matter that the migration code will only be available in C#.

To use the solutions's DB migration project to create the database, perform the following steps:
* Once you have loaded the solution, define the DB migration project as the start project.
* Open the Package Manager Console (the easiest way to do this is to enter "Package" in the search box at the top right of the Visual Studio main window).
* In the Package Manager Console, select the _RoamingClipboardDataLayer.Migration_ project from the ComboBox _Default project_.
* Enter: `update-database`.
* Wait for the database to be created.
* Finally, set _RoamingWebApi_ as the startproject, run and test it in the browser.

(NOTE: Development is in progress, it is not ready yet, there are still a few bugs and hick-ups. Pull requests are welcome!)
