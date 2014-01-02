<?php 
$pageTitle = "Hey, Kate!";
include('inc/header.php'); 
include('inc/content.php');

?>

  <div class="row">
      <div class="large-12 small-12 columns">
        <h3 class="reviewone">Would you pretty please make me<br><a href=<?php echo $links[$recipe]; ?> target="_blank"> <?php echo $recipes[$recipe]; ?></a>?</h3>
      </div>
  </div>
  <div class="row">
      <div class="large-12 small-12 columns">
        <h3 class="reviewtwo"><?php echo $retorts[$retort]; ?></h3>
      </div>
  </div>
  <div class="row">
      <div class="large-12 small-12 columns">
        <h3 class="reviewone">Okay, how about <a href="./">...</a></h3>
      </div>
  </div>

<?php include('inc/footer.php'); ?>
