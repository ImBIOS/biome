---
title: Lint Rule noShadowRestrictedNames
layout: layouts/rule.liquid
---

# noShadowRestrictedNames (since v0.9.0)

> This rule is recommended by Rome.

Disallow identifiers from shadowing restricted names.

## Examples

### Invalid

```jsx
function NaN() {}
```

{% raw %}<pre class="language-text"><code class="language-text"><span style="color: Orange;">warning</span><span style="color: Orange;">[</span><span style="color: Orange;"><a href="https://rome.tools/docs/lint/rules/noShadowRestrictedNames/">js/noShadowRestrictedNames</a></span><span style="color: Orange;">]</span><em>: </em><em>Do not shadow the global &quot;NaN&quot; property.</em>
  <span style="color: rgb(38, 148, 255);">┌</span><span style="color: rgb(38, 148, 255);">─</span> js/noShadowRestrictedNames.js:1:10
  <span style="color: rgb(38, 148, 255);">│</span>
<span style="color: rgb(38, 148, 255);">1</span> <span style="color: rgb(38, 148, 255);">│</span> function NaN() {}
  <span style="color: rgb(38, 148, 255);">│</span>          <span style="color: rgb(38, 148, 255);">-</span><span style="color: rgb(38, 148, 255);">-</span><span style="color: rgb(38, 148, 255);">-</span>

=  note: Consider renaming this variable. It's easy to confuse the origin of variables when they're named after a known global.

</code></pre>{% endraw %}

```jsx
let Set;
```

{% raw %}<pre class="language-text"><code class="language-text"><span style="color: Orange;">warning</span><span style="color: Orange;">[</span><span style="color: Orange;"><a href="https://rome.tools/docs/lint/rules/noShadowRestrictedNames/">js/noShadowRestrictedNames</a></span><span style="color: Orange;">]</span><em>: </em><em>Do not shadow the global &quot;Set&quot; property.</em>
  <span style="color: rgb(38, 148, 255);">┌</span><span style="color: rgb(38, 148, 255);">─</span> js/noShadowRestrictedNames.js:1:5
  <span style="color: rgb(38, 148, 255);">│</span>
<span style="color: rgb(38, 148, 255);">1</span> <span style="color: rgb(38, 148, 255);">│</span> let Set;
  <span style="color: rgb(38, 148, 255);">│</span>     <span style="color: rgb(38, 148, 255);">-</span><span style="color: rgb(38, 148, 255);">-</span><span style="color: rgb(38, 148, 255);">-</span>

=  note: Consider renaming this variable. It's easy to confuse the origin of variables when they're named after a known global.

</code></pre>{% endraw %}

```jsx
try {	} catch(Object) {}
```

{% raw %}<pre class="language-text"><code class="language-text"><span style="color: Orange;">warning</span><span style="color: Orange;">[</span><span style="color: Orange;"><a href="https://rome.tools/docs/lint/rules/noShadowRestrictedNames/">js/noShadowRestrictedNames</a></span><span style="color: Orange;">]</span><em>: </em><em>Do not shadow the global &quot;Object&quot; property.</em>
  <span style="color: rgb(38, 148, 255);">┌</span><span style="color: rgb(38, 148, 255);">─</span> js/noShadowRestrictedNames.js:1:15
  <span style="color: rgb(38, 148, 255);">│</span>
<span style="color: rgb(38, 148, 255);">1</span> <span style="color: rgb(38, 148, 255);">│</span> try {   } catch(Object) {}
  <span style="color: rgb(38, 148, 255);">│</span>                 <span style="color: rgb(38, 148, 255);">-</span><span style="color: rgb(38, 148, 255);">-</span><span style="color: rgb(38, 148, 255);">-</span><span style="color: rgb(38, 148, 255);">-</span><span style="color: rgb(38, 148, 255);">-</span><span style="color: rgb(38, 148, 255);">-</span>

=  note: Consider renaming this variable. It's easy to confuse the origin of variables when they're named after a known global.

</code></pre>{% endraw %}

```jsx
function Array() {}
```

{% raw %}<pre class="language-text"><code class="language-text"><span style="color: Orange;">warning</span><span style="color: Orange;">[</span><span style="color: Orange;"><a href="https://rome.tools/docs/lint/rules/noShadowRestrictedNames/">js/noShadowRestrictedNames</a></span><span style="color: Orange;">]</span><em>: </em><em>Do not shadow the global &quot;Array&quot; property.</em>
  <span style="color: rgb(38, 148, 255);">┌</span><span style="color: rgb(38, 148, 255);">─</span> js/noShadowRestrictedNames.js:1:10
  <span style="color: rgb(38, 148, 255);">│</span>
<span style="color: rgb(38, 148, 255);">1</span> <span style="color: rgb(38, 148, 255);">│</span> function Array() {}
  <span style="color: rgb(38, 148, 255);">│</span>          <span style="color: rgb(38, 148, 255);">-</span><span style="color: rgb(38, 148, 255);">-</span><span style="color: rgb(38, 148, 255);">-</span><span style="color: rgb(38, 148, 255);">-</span><span style="color: rgb(38, 148, 255);">-</span>

=  note: Consider renaming this variable. It's easy to confuse the origin of variables when they're named after a known global.

</code></pre>{% endraw %}

```jsx
function test(JSON) {console.log(JSON)}
```

{% raw %}<pre class="language-text"><code class="language-text"><span style="color: Orange;">warning</span><span style="color: Orange;">[</span><span style="color: Orange;"><a href="https://rome.tools/docs/lint/rules/noShadowRestrictedNames/">js/noShadowRestrictedNames</a></span><span style="color: Orange;">]</span><em>: </em><em>Do not shadow the global &quot;JSON&quot; property.</em>
  <span style="color: rgb(38, 148, 255);">┌</span><span style="color: rgb(38, 148, 255);">─</span> js/noShadowRestrictedNames.js:1:15
  <span style="color: rgb(38, 148, 255);">│</span>
<span style="color: rgb(38, 148, 255);">1</span> <span style="color: rgb(38, 148, 255);">│</span> function test(JSON) {console.log(JSON)}
  <span style="color: rgb(38, 148, 255);">│</span>               <span style="color: rgb(38, 148, 255);">-</span><span style="color: rgb(38, 148, 255);">-</span><span style="color: rgb(38, 148, 255);">-</span><span style="color: rgb(38, 148, 255);">-</span>

=  note: Consider renaming this variable. It's easy to confuse the origin of variables when they're named after a known global.

</code></pre>{% endraw %}
