import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Delete_Author_Cms_Initial, Get_All_Author_Cms_Initial } from 'redux/managers/author_slice/author_thunk';

const AllAuthor = () => {
  const dispatch = useDispatch();
  const authorList = useSelector((state) => state.author.all_authors_list);

  const handleDelete = (author_id) => {
    dispatch(Delete_Author_Cms_Initial({ author_id }));
  };

  useEffect(() => {
    dispatch(Get_All_Author_Cms_Initial());
  }, [dispatch]);

  useEffect(() => {
    console.log(authorList?.element?.result);
  }, [authorList]);

  return (
    <div className="container mt-20">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="py-3 pl-2 flex justify-between">
            <div className="relative max-w-xs">
              <label htmlFor="hs-table-search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                className="block w-full p-3 pl-10 text-sm border-2 border-gray-400 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-white dark:border-gray-700 dark:text-gray-400"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg
                  className="h-3.5 w-3.5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>
            <Link to="/author/add">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Thêm tác giả
              </button>
            </Link>
          </div>

          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                      Tên
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                      Giới tính
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                      Số lượng sách
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                      Quốc gia
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase ">
                      Edit
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase ">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {authorList &&
                    authorList?.element?.result.map((author, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {author?.author_id}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{author?.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {author?.gender === 0 ? 'Nữ' : 'Nam'}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">03</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">Việt Nam</td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <Link to={`/author/${author?.author_id}`} className="text-green-500 hover:text-green-700">
                            Edit
                          </Link>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleDelete(author?.author_id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAuthor;
