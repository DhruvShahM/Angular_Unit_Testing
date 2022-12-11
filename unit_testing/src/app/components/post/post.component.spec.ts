import { first } from "rxjs";
import { Post } from "src/app/models/post";
import { PostComponent } from "./post.component";

describe('Post Componenet', () => {
    it('Should raise and event when the delete is clicked', () => {
        const comp = new PostComponent();
        const post: Post = {
            id: 1, body: 'body 1', title: 'title 1', userId: 1
        };

        comp.post=post;

        comp.delete.pipe(first()).subscribe((selectedPost) => {
            expect(selectedPost).toEqual(post);
        });

        comp.onDeletePost(new MouseEvent('click'));

    });

})
