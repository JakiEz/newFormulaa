<script>
    export let href = '';
    export let text = '';
</script>
  
  <a href={href} class="hover-underline">{text}</a>
  
  <style>
    .hover-underline:hover {
      text-decoration: underline;

    }
    

  </style>