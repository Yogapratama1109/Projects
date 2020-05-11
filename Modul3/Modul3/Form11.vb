Public Class Form11
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        TextBox6.Text = Val(TextBox2.Text) + Val(TextBox3.Text) + Val(TextBox4.Text) + Val(TextBox5.Text)
        TextBox17.Text = Val(TextBox1.Text) - (Val(TextBox6.Text) + Val(TextBox7.Text) + Val(TextBox12.Text))
        If TextBox6.Text <> 0 Then
            Panel1.BackColor = Color.Green
        Else
            Panel1.BackColor = Color.Red
        End If
    End Sub

    Private Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click
        TextBox7.Text = Val(TextBox8.Text) + Val(TextBox9.Text) + Val(TextBox10.Text) + Val(TextBox11.Text)
        TextBox17.Text = Val(TextBox1.Text) - (Val(TextBox6.Text) + Val(TextBox7.Text) + Val(TextBox12.Text))
        If TextBox6.Text <> 0 Then
            Panel2.BackColor = Color.Green
        Else
            Panel2.BackColor = Color.Red
        End If
    End Sub

    Private Sub Button3_Click(sender As Object, e As EventArgs) Handles Button3.Click
        TextBox12.Text = Val(TextBox13.Text) + Val(TextBox14.Text) + Val(TextBox15.Text) + Val(TextBox16.Text)
        TextBox17.Text = Val(TextBox1.Text) - (Val(TextBox6.Text) + Val(TextBox7.Text) + Val(TextBox12.Text))
        If TextBox6.Text <> 0 Then
            Panel3.BackColor = Color.Green
        Else
            Panel3.BackColor = Color.Red
        End If
    End Sub
End Class