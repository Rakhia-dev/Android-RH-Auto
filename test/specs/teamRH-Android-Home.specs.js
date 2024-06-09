describe('first scenario', () => {
    before(async () => {
        console.log("----TEST STARTING----")
    });

    it('should click on the first button', async() => {
        //finding the element by accessibility id and storing as firstButton
       const firstButton = await $('~ListItemCard_1');

       //click on the button
       await firstButton.click();

       //Assert the button is still displayed
       await expect(firstButton).toBeExisting();
    })

    it('should get the title of the second button', async() => {

        //finding the element by accessibility id and storing as firstButtonTitle
       const secondButtonTitle = await $('~ListItemText_2');

       //get the title
       await secondButtonTitle.getText();

       //Assert itme 2 title is returned
       await expect(secondButtonTitle).toHaveText("Item 2");
    })

    it('should get the description of the second button', async() => {

       const secondButtonDesc = await $('~ListItemDesc_2');
       await secondButtonDesc.getText();
       await expect(secondButtonDesc).toHaveText("Item description");
    })
    //TAKE A LOOK AT WAYS TO SCROLL
    it('should scroll to the button of the screen', async() => {
        const lastButton = await $('~ListItemCard_40');
        await lastButton.scrollIntoView();
        await expect(lastButton).toBeExisting();
     })

     it('should check all the button titleson screen', async() => {
        const expectedList = ['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6',
            'Item 7','Item 8','Item 9'
        ]
        const actualList = []
        const allButtonsTitleList = await $$('android.widget.TextView');

        //loop through the list
        for (const element of allButtonsTitleList){
            actualList.push(await element.getText());
        }
        //Assertion
        await expect(actualList).toEqual(expectedList);
     })

     after( () => {
        console.log("END OF TEST")
        driver.deleSession()
    })

});