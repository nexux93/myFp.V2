<?php
function showMore($connect, $table, $data_count_show, $data_count_add)
{
    $query = sprintf("SELECT * FROM {$table} WHERE id > {$data_count_show }LIMIT {$data_count_add}");
    $result = mysqli_query($connect, $query);

}