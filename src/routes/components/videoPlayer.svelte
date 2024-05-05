<!-- VideoPlayer.svelte -->
<script>
    export let vide ='$lib/appsomething.mp4'
    export let captionSource = './assets/captions.vtt';
  </script>
  
  <div class="video-player">
    <video controls width="640" height="360">
      <source src={vide} type="video/mp4">
      <!-- <track kind="captions" src={captionSource} srclang="en" label="English"> -->
    </video>
  </div>