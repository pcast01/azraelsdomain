---
title: "PowerShell with Microsoft Excel Macro"
tags: ["powershell", "excel"]
published: true
date: "2017-01-17"
---

![powershell ISE](../../../src/images/poshBlack.jpg)

# Create PowerShell Script to open and run Macro in Excel

Below is an example of how to use PowerShell to automatically run an Excel macro.

```powershell
Function RunExcelMacro() {
    # Open Excel file
    $excel = new-object -comobject excel.application
    $filePath = "C:\PowershellSheet.xlsm"
    $workbook = $excel.Workbooks.Open($FilePath)
    $excel.Visible = $true
    $worksheet = $workbook.worksheets.item(1)
    Write-Host "Running macro in excel to scrub data."
    $excel.Run("PowershellMacro")
    $workbook.save()
    $workbook.close()
    $excel.quit()
    Write-Host "Closed Excel"
}
```

This code calls creates a COM Excel object and then opens an Excel Macro called "PowershellMacro". After it executes the macro then we explicitly quit excel and the process closes.

Here are some good references on how to use Excel inside of PowerShell.

<b><i>Right-Click links below and save as</i></b>

Here is the xlsm file: <a href="../../../src/docs/PowershellSheet.xlsm" target="_blank">PowershellSheet.xlsm</a>

Here is the ps1 file: <a href="../../../src/docs/PowershellExcelMacro.ps1" target="_blank">PowershellExcelMacro.ps1</a>

- <a href="https://blogs.technet.microsoft.com/heyscriptingguy/2006/09/08/how-can-i-use-windows-powershell-to-automate-microsoft-excel/" target="_blank">Scripting guy</a>
- <a href="http://ramblingcookiemonster.github.io/PSExcel-Intro/" target="_blank">Rambling Cookie Monster</a>
- <a href="https://posh2scripting.wordpress.com/2013/07/31/automating-excel-spreadsheets-with-powershell/" target="_blank">Posh2Scripting</a>
