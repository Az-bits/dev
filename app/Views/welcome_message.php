<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form id="form" action="create">
        <fieldset>
            <legend>Formulario</legend>
            <input type="checkbox" name="rj" id="rj"><label for="rj">Rj 45</label><br>
            <input type="checkbox" name="cable" id="cable"><label for="cable">Cable UTP</label><br>

            <input type="submit" value="Enviar">
        </fieldset>
    </form>

    <script src="<?= base_url('components/jquery.min.js') ?>"></script>
    <script src="<?= base_url('components/popper.min.js') ?>"></script>
    <script src="<?= base_url('js/index.js') ?>"></script>
    <!-- <script src="<= base_url('components/bootstrap-material-design.min.js') ?>"></script> -->

</body>

</html>