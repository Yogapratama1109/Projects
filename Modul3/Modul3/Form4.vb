Public Class Form4

    Sub hitung()
        Label3.Text = ListBox1.Items.Count & "item"
    End Sub
    Sub tambah()
        With ListBox1.Items
            .Add("Nasi goreng cinta")
            .Add("Bebek rebus jahe")
            .Add("krecek tahu")
        End With
    End Sub

    Private Sub Form1_Load_1(sender As Object, e As EventArgs) Handles MyBase.Load
        Call tambah()
    End Sub

    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        If ListBox1.SelectedItem = " " Then
            MsgBox("Pilih makanan yang akan di pesan")
        Else
            ListBox2.Items.Add(ListBox1.SelectedItem)
            ListBox1.Items.Remove(ListBox1.SelectedItem)
        End If
        hitung()
    End Sub

    Private Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click
        If ListBox2.SelectedItem = " " Then
            MsgBox("Pilih makanan yang akan di hapus")
        Else
            ListBox1.Items.Add(ListBox2.SelectedItem)
            ListBox2.Items.Remove(ListBox2.SelectedItem)
            hitung()
        End If
    End Sub

    Private Sub Button3_Click(sender As Object, e As EventArgs) Handles Button3.Click
        ListBox2.Items.Clear()
        ListBox1.Items.Clear()
        tambah()
        hitung()

    End Sub
End Class
