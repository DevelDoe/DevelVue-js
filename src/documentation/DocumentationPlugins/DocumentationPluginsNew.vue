<template>
    <article name="documentationPluginsNew" class="documentation-article">
        <h3>Adding a new plug-in</h3>
        <p>Follow these steps to add a new plug-in.</p>
        <p>This documentation uses Organization as the example existing folder and Magic as the example new plug-in for clarity.</p>
        <ol>
            <li>
                <p>Copy an existing plug-in web-folder.</p>
                <ol>
                    <li>Create a <strong>web</strong> folder in <strong>C:\Development\BFX\Application\BuildingBlocks\Magic\WebParts\Butterfly.Magic.Web\</strong>.</li>
                    <li>Copy the files in <strong>C:\Development\BFX\Application\BuildingBlocks\Organization\WebParts\Butterfly.Organization.Web\web</strong>, minus the <strong>node_modules</strong> and <strong>dist</strong> folders, into the new plug-in's <strong>web</strong> folder.</li>
                </ol>
            </li>
            <li>In the new plug-in's web folder do a global replace of the existing plug-in's build name (such as <strong>cpm-org</strong>) with the new plug-ins shortened name (such as <strong>cpm-mag</strong>).</li>
            <li>In the new plug-in's web folder do a global replace of the existing plug-in's full name (such as <strong>Organization</strong>) with the new plug-ins full name (such as <strong>Magic</strong>).</li>
            <li>
                <p>Add as a vuePlugin in <strong>C:\Development\BFX\Application\Web\gulpfile.js</strong>.</p>
                <pre><code>
const vuePlugins = {
    org: `${getPluginFolders({ project: 'Organization', code: 'web' })}dist/plugin/`,
    cw: `${getPluginFolders({ project: 'CustomsWarehouse', code: 'web' })}dist/plugin/`,
    dec: `${getPluginFolders({ project: 'Declaration', code: 'web' })}dist/plugin/`,
    cm: `${getPluginFolders({ project: 'CaseManagement', code: 'web' })}dist/plugin/`,
    rd: `${getPluginFolders({ project: 'ReferenceData', code: 'web' })}dist/plugin/`,
    inv: `${getPluginFolders({ project: 'Invoicing', code: 'web' })}dist/plugin/`,
    <strong>mag: `${getPluginFolders({ project: 'Magic', code: 'web' })}dist/plugin/`</strong>
};
                </code></pre>
            </li>
            <li>
                <p>Add as a plugin in <strong>C:\Development\BFX\Tools\VuePlugins\BuildVuePlugins.ps1</strong>.</p>
                <pre><code>
$plugins = @();
$plugins += "$RepoRoot\Application\BuildingBlocks\CaseManagement\WebParts\Butterfly.CaseManagement.Web\web"
$plugins += "$RepoRoot\Application\BuildingBlocks\CustomsWarehouse\WebParts\Butterfly.CustomsWarehouse.Web\web"
$plugins += "$RepoRoot\Application\BuildingBlocks\Declaration\WebParts\Butterfly.Declaration.Web\web"
$plugins += "$RepoRoot\Application\BuildingBlocks\Organization\WebParts\Butterfly.Organization.Web\web"
$plugins += "$RepoRoot\Application\BuildingBlocks\ReferenceData\WebParts\Butterfly.ReferenceData.Web\web"
$plugins += "$RepoRoot\Application\BuildingBlocks\Invoicing\WebParts\Butterfly.Invoicing.Web\web"
<strong>$plugins += "$RepoRoot\Application\BuildingBlocks\Magic\WebParts\Butterfly.Magic.Web\web"</strong>
                </code></pre>
                <p>This is easiest to edit in PowerShell ISE.</p>
            </li>
            <li>
                <p>Add route in <strong>C:\Development\BFX\Application\Web\common\core\router.js</strong>.</p>
                <pre><code>
routes: {
    'Logout': 'logout',
    'assignment/startTransit(/:id)(/)': 'showStartTransit',
    'assignment/arrivalNotification(/:id)(queryString)': 'showArrivalNotification',
    'assignment/unloadingRemarks(/:id)(/)': 'showUnloadingRemarks',
    'Transit(/)': 'showTransitList',
    'reports/warehouse/articlemovement/reportArticleMovement': 'showReportArticleMovement',
    'reporting/:module/:reportName': 'showReportingView',
    'systemadministration*urlArgs': 'showSystemAdministrationView',
    'declaration*urlArgs': 'showDeclarationView',
    'warehousing*urlArgs': 'showWarehousingView',
    'caseManagement*urlArgs': 'showCaseManagementView',
    'cw/:module(/:id)': 'showCustomsWarehouseVueView',
    'org/:module(/:id)': 'showOrganizationView',
    'dec/:module(/:id)': 'showDeclarationVueView',
    'cm/:module(/:id)': 'showCaseManagementVueView',
    'rd/:module(/:id)': 'showReferenceDataVueView',
    'inv/:module(/:id)': 'showInvoicingVueView',
    <strong>'mag/:module(/:id)': 'showMagicVueView',</strong>
    ':pageName(/)': 'showPage',
    ':pageName/:id': 'showPage',
    ':pageName/:id*queryString': 'showPage',
    '(/)': 'showPage'
},
...
showMagicVueView: function (module, id) {
    var path = '/Application/assets/js/cpm-mag.min.js';
    var modules = [
        { url: 'test', component: 'Hello' }
    ];
},
                </code></pre>
            </li>
            <li>Double-check that all files are commited to TFS via Git. <code>.npmrc</code> should be in <code>.gitignore</code>, but needs to be added. Remove the ignore-rule, commit the file, and then add the rule again.</li>
        </ol>
    </article>
</template>
