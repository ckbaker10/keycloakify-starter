<#import "template.ftl" as layout>
<@layout.emailLayout>
${kcSanitize(msg("emailTestBodyHtml",realmName))?no_esc}
<p><IMG SRC="cid:img/fuma-email.png" alt="Logo"></p>
</@layout.emailLayout>
