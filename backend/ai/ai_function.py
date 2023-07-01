def Face_Analysis(points):
    def Eyes_Length_Classification(points):
        a = points[0]
        b = points[36]
        c = points[39]
        d = points[27]

        a_x = a[0, 0]
        a_y = a[0, 1]

        b_x = b[0, 0]
        b_y = b[0, 1]

        c_x = c[0, 0]
        c_y = c[0, 1]

        d_x = d[0, 0]
        d_y = d[0, 1]

        if (d_x-a_x)/(c_x-b_x) >2.2:
            return('Short eye')
        elif 2.0<= (d_x-a_x)/(c_x-b_x) <= 2.2:
            return('Golden ratio eye')
        else:
            return('Long eye')


    def Eyes_Angle_Classification(points):
        b = points[36]
        c = points[39]

        b_x = b[0, 0]
        b_y = b[0, 1]

        c_x = c[0, 0]
        c_y = c[0, 1]

        if math.degrees(math.atan((c_y-b_y)/(c_x-b_x))) > 5:
            return('Up eyes')
        elif 4<= math.degrees(math.atan((c_y-b_y)/(c_x-b_x))) <= 5:
            return('Golden Ratio eyes')
        else:
            return('Down Eyes')

    def Lip_Length_Classification(points):
        a = points[36]
        b = points[39]
        c = points[48]
        d = points[54]

        a_x = a[0, 0]
        a_y = a[0, 1]

        b_x = b[0, 0]
        b_y = b[0, 1]

        c_x = c[0, 0]
        c_y = c[0, 1]

        d_x = d[0, 0]
        d_y = d[0, 1]

        if (d_x-c_x)/(b_x-a_x) > 1.6:
            return('Short Lip')
        elif 1.4 <= (d_x-c_x)/(b_x-a_x) <= 1.6:
            return('Golden Ration Lip')
        else:
            return('Long Lip')

    def Lip_Thickness_Classification(points):
        a = points[48]
        b = points[54]
        c = points[51]
        d = points[57]

        a_x = a[0, 0]
        a_y = a[0, 1]

        b_x = b[0, 0]
        b_y = b[0, 1]

        c_x = c[0, 0]
        c_y = c[0, 1]

        d_x = d[0, 0]
        d_y = d[0, 1]

        if (b_x-a_x)/(d_y-c_y) > 3.1:
            return('Thin Lip')
        elif 2.9 <= (b_x-a_x)/(d_y-c_y) <= 3.1:
            return('Golden Ration Lip')
        else:
            return('Thick Lip')

    def Nostrils_Classification(points):
        a = points[39]
        b = points[42]
        c = points[31]
        d = points[35]

        a_x = a[0, 0]
        a_y = a[0, 1]

        b_x = b[0, 0]
        b_y = b[0, 1]

        c_x = c[0, 0]
        c_y = c[0, 1]

        d_x = d[0, 0]
        d_y = d[0, 1]

        if (b_x-a_x)/(d_x-c_x) > 1.1:
            return('Narrow Nostrils')
        elif 0.9 <= (b_x-a_x)/(d_x-c_x) <= 1.1:
            return('Golden Ratio Nostrils')
        else:
            return('Wide Nostrils')

    def Nose_Length_Classification(points):
        a = points[21]
        b = points[33]
        c = points[33]
        d = points[8]

        a_x = a[0, 0]
        a_y = a[0, 1]

        b_x = b[0, 0]
        b_y = b[0, 1]

        c_x = c[0, 0]
        c_y = c[0, 1]

        d_x = d[0, 0]
        d_y = d[0, 1]

        if (b_y-a_y)/(d_y-c_y) > 1.1:
            return('Long Nose')
        elif 0.9 <= (b_y-a_y)/(d_y-c_y) <= 1.1:
            return('Golden Ratio Nose')
        else:
            return('Short Nose')

    #print(Nose_Length_Classification(points))
    #print(Nostrils_Classification(points))
    #print(Lip_Thickness_Classification(points))
    #print(Lip_Length_Classification(points))
    #print(Eyes_Angle_Classification(points))
    #print(Eyes_Length_Classification(points))
    print("Eyes_Length_Classification: {} \nEyes_Angle_Classification: {} \nLip_Length_Classification: {} \nLip_Thickness_Classification: {} \nNostrils_Classification: {} \nNose_Length_Classification: {}"
    .format(Eyes_Length_Classification(points), Eyes_Angle_Classification(points), Lip_Length_Classification(points), Lip_Thickness_Classification(points), Nostrils_Classification(points), Nose_Length_Classification(points)))