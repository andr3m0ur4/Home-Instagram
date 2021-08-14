class Modal {
    constructor() {
        this.title = $('#title')
        this.body = $('#body')
        this.button = $('#button')
    }

    removerConta() {
        this.clear()

        this.title.html('Remover Conta')
        this.title.addClass('text-danger')
        this.body.html('Deseja realmente remover sua conta?')
        this.button.html('Remover')
        this.button.addClass('btn-danger')
    }

    alternarConta() {
        this.clear()

        this.title.html('Alternar Conta')
        this.title.addClass('text-info')
        this.body.html('Deseja realmente alternar de conta?')
        this.button.html('Alternar')
        this.button.addClass('btn-info')
    }

    inscrever() {
        this.clear()

        this.title.html('Inscrever Conta')
        this.title.addClass('text-success')
        this.body.html('Por favor, clique no botão abaixo para se inscrever no Instagram.')
        this.button.html('Inscrever-se')
        this.button.addClass('btn-success')
    }

    abrirStories() {
        this.clear()

        this.title.html('Stories')
        this.title.addClass('text-primary')
        const photo = $('#photo').clone()
        this.body.append(photo)
        this.button.html('Meu Stories')
        this.button.addClass('btn-primary')
    }

    desativar() {
        this.clear()

        this.title.html('Desativar Conta')
        this.title.addClass('text-warning')
        this.body.html('Tem certeza que deseja desativar sua conta temporariamente?')
        this.button.html('Desativar')
        this.button.addClass('btn-warning')
    }

    trocarConta() {
        this.clear()

        this.title.html('Mudar de Conta')
        this.title.addClass('text-primary')
        this.body.html('Clique no botão abaixo para trocar de conta.')
        this.button.html('Mudar Conta')
        this.button.addClass('btn-primary')
    }

    clear() {
        this.title.html('')
        this.title.removeClass()
        this.body.html('')
        this.button.html('')
        this.button.removeClass()
        this.button.addClass('btn')
    }
}

$(() => {
    modal()
    remover()
    alternar()
    inscrever()
    stories()
    desativar()
    trocarConta()
})

const modal = () => {
    $.get('./modal.html', modal => {
        $('footer').after(modal)
    })
}

const remover = () => {
    $('#remover').click(() => {
        const modal = new Modal()
        modal.removerConta()

        $('#modal').modal()
    })
}

const alternar = () => {
    $('#alternar').click(() => {
        const modal = new Modal()
        modal.alternarConta()

        $('#modal').modal()
    })
}

const stories = () => {
    $('[stories]').click(() => {
        const modal = new Modal()
        modal.abrirStories()

        $('#modal').modal()
    })
}

const desativar = () => {
    $('#desativar').click(() => {
        const modal = new Modal()
        modal.desativar()

        $('#modal').modal()
    })
}

const trocarConta = () => {
    $('#trocar-conta').click(() => {
        const modal = new Modal()
        modal.trocarConta()

        $('#modal').modal()
    })
}

const inscrever = () => {
    $('#inscrever').click(() => {
        const modal = new Modal()
        modal.inscrever()

        $('#modal').modal()
    })
}
