
const githubUsername = 'J-Priebe'

const reviewedByEl = `
<a
  class="js-selected-navigation-item subnav-item"
  title="Pull Requests you have reviewed"
  data-selected-links="/pulls?q=is%3Aopen+is%3Apr+archived%3Afalse+reviewed-by%3A${githubUsername}"
  href="/pulls?q=is%3Aopen+is%3Apr+archived%3Afalse+reviewed-by%3A${githubUsername}"
>
  Reviewed By
</a>
`

$('.subnav-links').append(reviewedByEl)


$(document).on('pjax:complete', function() {
  $('.subnav-links').append(reviewedByEl)
})
